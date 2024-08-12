import React from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const ReportsContent = () => {
  const reportData = [
    {
      id: 1,
      title: "Monthly Sales Report",
      date: "2024-07-31",
      summary: "Summary of the monthly sales performance.",
    },
    {
      id: 2,
      title: "Inventory Status Report",
      date: "2024-07-30",
      summary: "Overview of current inventory levels.",
    },
    {
      id: 3,
      title: "Customer Feedback Report",
      date: "2024-07-29",
      summary: "Insights from recent customer feedback.",
    },
    // Add more report data as needed
  ];

  const pieData = {
    labels: ["Product A", "Product B", "Product C"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded mt-4">
      <h3 className="text-xl font-bold mb-4">Reports Overview</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-400 rounded">
          <h4 className="text-lg font-bold">Total Reports</h4>
          <p className="text-2xl">{reportData.length}</p>
        </div>
        <div className="p-4 bg-purple-200 rounded">
          <h4 className="text-lg font-bold">Latest Report</h4>
          <p className="text-2xl">{reportData[0].title}</p>
        </div>
        <div className="p-4 bg-yellow-200 rounded">
          <h4 className="text-lg font-bold">Report Date</h4>
          <p className="text-2xl">{reportData[0].date}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold my-4">Report List</h3>
      <table className="min-w-full bg-white my-3">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Summary</th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((report, index) => (
            <tr
              key={report.id}
              className={
                index % 2 === 0 ? "bg-blue-400 text-center" : "text-center"
              }
            >
              <td className="py-2 px-4 border-b">{report.title}</td>
              <td className="py-2 px-4 border-b">{report.date}</td>
              <td className="py-2 px-4 border-b">{report.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-xl font-bold my-4">Sales Performance</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-4 bg-white shadow-md rounded">
          <h4 className="text-lg font-bold mb-2">Sales Distribution</h4>
          <Pie data={pieData} />
        </div>
        <div className="p-4 bg-white shadow-md rounded">
          <h4 className="text-lg font-bold mb-2">Sales Over Time</h4>
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default ReportsContent;
