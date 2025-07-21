import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns"; // Import the date adapter

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  TimeScale
);

const MyIncidents = () => {
  const [range, setRange] = useState("daily");

  const rawData = {
    daily: {
      labels: ["2023-10-01", "2023-10-02", "2023-10-03", "2023-10-04"],
      datasets: [
        { label: "New", data: [5, 20, 15, 10], backgroundColor: "#FF6384" },
        {
          label: "In Progress",
          data: [10, 25, 20, 15],
          backgroundColor: "#36A2EB",
        },
        { label: "On Hold", data: [2, 5, 3, 4], backgroundColor: "#FFCE56" },
        {
          label: "Resolved",
          data: [8, 15, 10, 12],
          backgroundColor: "#4BC0C0",
        },
      ],
    },
    weekly: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        { label: "New", data: [50, 80, 60, 40], backgroundColor: "#FF6384" },
        {
          label: "In Progress",
          data: [70, 100, 90, 60],
          backgroundColor: "#36A2EB",
        },
        {
          label: "On Hold",
          data: [10, 20, 15, 10],
          backgroundColor: "#FFCE56",
        },
        {
          label: "Resolved",
          data: [40, 60, 50, 45],
          backgroundColor: "#4BC0C0",
        },
      ],
    },
    monthly: {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "New",
          data: [200, 300, 250, 220],
          backgroundColor: "#FF6384",
        },
        {
          label: "In Progress",
          data: [300, 400, 350, 300],
          backgroundColor: "#36A2EB",
        },
        {
          label: "On Hold",
          data: [50, 70, 60, 55],
          backgroundColor: "#FFCE56",
        },
        {
          label: "Resolved",
          data: [150, 200, 180, 170],
          backgroundColor: "#4BC0C0",
        },
      ],
    },
  };

  const data = rawData[range];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        type: range === "daily" ? "time" : "category",
        time: range === "daily" ? { unit: "day" } : undefined,
        stacked: true, // Enable stacking for x-axis
        title: {
          display: true,
          text:
            range === "daily" ? "Date" : range === "weekly" ? "Week" : "Month",
        },
      },
      y: {
        stacked: true, // Enable stacking for y-axis
        title: {
          display: true,
          text: "Number of Incidents",
        },
      },
    },
  };

  return (
    <div className="widget">
      <h2>My Incidents Widget</h2>
      <div>
        <label htmlFor="rangeFilter">Filter by:</label>
        <select
          id="rangeFilter"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <Bar data={data} />
    </div>
  );
};

export default MyIncidents;
