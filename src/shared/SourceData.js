export const SourceData = [
  {
    building: "Headquarters",
    electricityMeters: [
      {
        id: "EM001",
        name: "Main Meter",
        dataSeries: [
          { energyConsumption: 120, cost: 30, timeStamp: "2024-11-22" },
          { energyConsumption: 130, cost: 32, timeStamp: "2024-11-23" },
          { energyConsumption: 110, cost: 28, timeStamp: "2024-11-24" },
          { energyConsumption: 125, cost: 31, timeStamp: "2024-11-25" },
        ],
      },
      {
        id: "EM002",
        name: "Backup Meter",
        dataSeries: [
          { energyConsumption: 60, cost: 15, timeStamp: "2024-11-22" },
          { energyConsumption: 55, cost: 14, timeStamp: "2024-11-23" },
          { energyConsumption: 70, cost: 18, timeStamp: "2024-11-24" },
          { energyConsumption: 65, cost: 16, timeStamp: "2024-11-25" },
        ],
      },
    ],
    rooms: [
      {
        id: "R001",
        name: "Conference Room",
        dataSeries: [
          { temperature: 22.5, humidity: 45, timeStamp: "2024-11-22" },
          { temperature: 23, humidity: 50, timeStamp: "2024-11-23" },
          { temperature: 22, humidity: 48, timeStamp: "2024-11-24" },
          { temperature: 24, humidity: 46, timeStamp: "2024-11-25" },
        ],
      },
      {
        id: "R002",
        name: "Server Room",
        dataSeries: [
          { temperature: 18, humidity: 40, timeStamp: "2024-11-22" },
          { temperature: 19, humidity: 42, timeStamp: "2024-11-23" },
          { temperature: 20, humidity: 41, timeStamp: "2024-11-24" },
          { temperature: 19, humidity: 43, timeStamp: "2024-11-25" },
        ],
      },
    ],
  },
  {
    building: "Regional Office",
    electricityMeters: [
      {
        id: "EM101",
        name: "Office Meter",
        dataSeries: [
          { energyConsumption: 80, cost: 20, timeStamp: "2024-11-22" },
          { energyConsumption: 85, cost: 21, timeStamp: "2024-11-23" },
          { energyConsumption: 75, cost: 19, timeStamp: "2024-11-24" },
          { energyConsumption: 78, cost: 20, timeStamp: "2024-11-25" },
        ],
      },
    ],
    rooms: [
      {
        id: "R101",
        name: "Staff Room",
        dataSeries: [
          { temperature: 20, humidity: 55, timeStamp: "2024-11-22" },
          { temperature: 21, humidity: 53, timeStamp: "2024-11-23" },
          { temperature: 22, humidity: 52, timeStamp: "2024-11-24" },
          { temperature: 20, humidity: 54, timeStamp: "2024-11-25" },
        ],
      },
    ],
  },
  {
    building: "Warehouse",
    electricityMeters: [
      {
        id: "EM201",
        name: "Storage Area Meter",
        dataSeries: [
          { energyConsumption: 50, cost: 10, timeStamp: "2024-11-22" },
          { energyConsumption: 45, cost: 9, timeStamp: "2024-11-23" },
          { energyConsumption: 55, cost: 12, timeStamp: "2024-11-24" },
          { energyConsumption: 60, cost: 14, timeStamp: "2024-11-25" },
        ],
      },
    ],
    rooms: [
      {
        id: "R201",
        name: "Storage Room",
        dataSeries: [
          { temperature: 15, humidity: 60, timeStamp: "2024-11-22" },
          { temperature: 16, humidity: 62, timeStamp: "2024-11-23" },
          { temperature: 15, humidity: 58, timeStamp: "2024-11-24" },
          { temperature: 14, humidity: 59, timeStamp: "2024-11-25" },
        ],
      },
    ],
  },
  {
    building: "Research Lab",
    electricityMeters: [
      {
        id: "EM301",
        name: "Lab Meter One",
        dataSeries: [
          { energyConsumption: 150, cost: 40, timeStamp: "2024-11-22" },
          { energyConsumption: 160, cost: 42, timeStamp: "2024-11-23" },
          { energyConsumption: 145, cost: 38, timeStamp: "2024-11-24" },
          { energyConsumption: 155, cost: 41, timeStamp: "2024-11-25" },
        ],
      },
      {
        id: "EM302",
        name: "Lab Meter Two",
        dataSeries: [
          { energyConsumption: 100, cost: 25, timeStamp: "2024-11-22" },
          { energyConsumption: 95, cost: 24, timeStamp: "2024-11-23" },
          { energyConsumption: 105, cost: 26, timeStamp: "2024-11-24" },
          { energyConsumption: 102, cost: 25, timeStamp: "2024-11-25" },
        ],
      },
    ],
    rooms: [
      {
        id: "R301",
        name: "Experiment Room",
        dataSeries: [
          { temperature: 20, humidity: 50, timeStamp: "2024-11-22" },
          { temperature: 21, humidity: 48, timeStamp: "2024-11-23" },
          { temperature: 20, humidity: 49, timeStamp: "2024-11-24" },
          { temperature: 22, humidity: 47, timeStamp: "2024-11-25" },
        ],
      },
      {
        id: "R302",
        name: "Testing Room",
        dataSeries: [
          { temperature: 19, humidity: 45, timeStamp: "2024-11-22" },
          { temperature: 18, humidity: 46, timeStamp: "2024-11-23" },
          { temperature: 19, humidity: 44, timeStamp: "2024-11-24" },
          { temperature: 20, humidity: 43, timeStamp: "2024-11-25" },
        ],
      },
    ],
  },
  {
    building: "Data Center",
    electricityMeters: [
      {
        id: "EM401",
        name: "Main Power Supply",
        dataSeries: [
          { energyConsumption: 300, cost: 75, timeStamp: "2024-11-22" },
          { energyConsumption: 310, cost: 78, timeStamp: "2024-11-23" },
          { energyConsumption: 290, cost: 70, timeStamp: "2024-11-24" },
          { energyConsumption: 305, cost: 74, timeStamp: "2024-12-01" },
        ],
      },
    ],
    rooms: [
      {
        id: "R401",
        name: "Main Server Room",
        dataSeries: [
          { temperature: 18, humidity: 40, timeStamp: "2024-11-22" },
          { temperature: 17, humidity: 38, timeStamp: "2024-11-23" },
          { temperature: 18, humidity: 39, timeStamp: "2024-11-24" },
          { temperature: 19, humidity: 41, timeStamp: "2024-11-25" },
        ],
      },
      {
        id: "R402",
        name: "Backup Server Room",
        dataSeries: [
          { temperature: 19, humidity: 42, timeStamp: "2024-11-22" },
          { temperature: 20, humidity: 43, timeStamp: "2024-11-23" },
          { temperature: 19, humidity: 41, timeStamp: "2024-11-24" },
          { temperature: 18, humidity: 40, timeStamp: "2024-11-25" },
        ],
      },
    ],
  },
];
