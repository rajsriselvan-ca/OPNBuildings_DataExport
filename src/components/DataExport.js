import React, { useState } from "react";
import {
  Select,
  DatePicker,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Spin,
} from "antd";
import moment from "moment";
import { SourceData } from "../shared/SourceData";
import DownloadModal from "../components/DownloadModal"; 
import { notifyError, notifyWarning, notifySuccess } from "../components/Notification"; 
import "../styles/DataExport.css"; 

const { RangePicker } = DatePicker;
const { Text } = Typography;

const DataExport = () => {
  const [building, setBuilding] = useState(null);
  const [dataType, setDataType] = useState(null);
  const [dateRange, setDateRange] = useState([]);
  const [fileFormat, setFileFormat] = useState("JSON");
  const [modalVisible, setModalVisible] = useState(false);
  const [downloadedData, setDownloadedData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBuildingChange = (value) => {
    setBuilding(value);
    setDataType(null);
  };

  const convertToCSV = (data, buildingName, dataType) => {
    if (data.length === 0) return "";

    const metrics = Object.keys(data[0].dataSeries[0] || {}).filter(
      (key) => key !== "timeStamp"
    );

    const headers = ["Timestamp", `${buildingName}, ${metrics.join(", ")}`];
    const rows = [];

    data.forEach((item) => {
      item.dataSeries.forEach((record) => {
        const values = metrics.map((metric) => record[metric]);
        rows.push([record.timeStamp, item.name, ...values]);
      });
    });

    return [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");
  };

  const fetchData = async (building, dataType, dateRange) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const selectedBuilding = SourceData.find((record) => record.building === building);
        if (!selectedBuilding) {
          return reject(new Error("Building data not found."));
        }
  
        const selectedData =
          dataType === "electricityMeters"
            ? selectedBuilding.electricityMeters
            : selectedBuilding.rooms;
  
        const filteredData = selectedData.map((item) => ({
          name: item.name,
          dataSeries: item.dataSeries.filter((entry) =>
            moment(entry.timeStamp, "YYYY-MM-DD").isBetween(
              moment(dateRange[0], "YYYY-MM-DD"),
              moment(dateRange[1], "YYYY-MM-DD"),
              null,
              "[]"
            )
          ),
        }));
  
        if (filteredData.every((item) => item.dataSeries.length === 0)) {
          return reject(new Error("No data available for the selected date range."));
        }
  
        resolve(filteredData);
      }, 2000);
    });
  };

  const handleDownload = async () => {
    if (!building || !dataType || !dateRange.length || !fileFormat) {
      notifyError("Error", "All fields are required. Please fill them before submitting!");
      return;
    }
  
    setLoading(true);
  
    try {
      const fetchedData = await fetchData(building, dataType, dateRange);
      const formattedData =
        fileFormat === "CSV"
          ? convertToCSV(fetchedData, building, dataType)
          : JSON.stringify({ buildingName: building, dataType, data: fetchedData }, null, 2);
  
      setDownloadedData(formattedData);
      setModalVisible(true);
  
      notifySuccess(
        "Success",
        `Data has been successfully processed and displayed in ${fileFormat} format.`
      );

      setBuilding(null);
      setDataType(null);
      setDateRange([]);
    } catch (error) {
      if (error.message === "No data available for the selected date range.") {
        notifyWarning(
          "No Data",
          "No data available for the selected date range. Please select a different date range."
        );
        setDateRange([]);
      } else {
        notifyError("Error", `Failed to fetch data: ${error.message}`);
      }
    } finally {
      setLoading(false); 
    }
  };
  
  return (
    <div className="data-export-parent">
      <Spin spinning={loading} tip="Processing data...">
        <Card className="data-export-card" title="Data Series Download">
          <Row gutter={[16, 4]}>
            <Col xs={24} sm={12} md={8}>
              <Text>Select Building</Text>
              <Select
                className="data-export-select"
                placeholder="Select Building"
                value={building}
                options={SourceData.map((record) => ({
                  label: record.building,
                  value: record.building,
                }))}
                onChange={handleBuildingChange}
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Text>Select Data Type</Text>
              <Select
                className="data-export-select"
                placeholder="Select Data Type"
                value={dataType}
                options={[
                  { label: "Electricity Meters", value: "electricityMeters" },
                  { label: "Rooms", value: "rooms" },
                ]}
                onChange={setDataType}
                disabled={!building}
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Text>Select Date Range</Text>
              <RangePicker
                className="data-export-rangepicker"
                popupClassName="responsive-calendar"
                value={dateRange.map((date) => moment(date, "YYYY-MM-DD"))}
                onChange={(dates) =>
                  setDateRange(
                    dates ? dates.map((date) => date.format("YYYY-MM-DD")) : []
                  )
                }
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Text>Select File Format</Text>
              <Select
                className="data-export-select"
                placeholder="Select File Format"
                value={fileFormat}
                options={[
                  { label: "JSON", value: "JSON" },
                  { label: "CSV", value: "CSV" },
                ]}
                onChange={setFileFormat}
              />
            </Col>
            <Col xs={24} md={8}>
              <Button
                type="primary"
                className="data-export-button"
                onClick={handleDownload}
                disabled={
                  !building || !dataType || !dateRange.length || !fileFormat
                }
              >
                Download
              </Button>
            </Col>
          </Row>
        </Card>
      </Spin>
      <DownloadModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        data={downloadedData}
        fileFormat={fileFormat}
      />
    </div>
  );
};

export default DataExport;
