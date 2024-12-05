import React from "react";
import { Modal } from "antd";
import  "../styles/DownloadModal.css"

const DownloadModal = ({ visible, onClose, data }) => (
  <Modal
    title="Downloaded Data"
    visible={visible}
    onCancel={onClose}
    footer={null}
    width={800}
    className="download-modal"
  >
    <pre>
      {data}
    </pre>
  </Modal>
);

export default DownloadModal;
