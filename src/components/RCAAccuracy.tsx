import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RCAAccuracy = () => {
  const data = {
    labels: [
      "September 2024",
      "October 2024",
      "November 2024",
      "December 2024",
      "January 2025",
      "February 2025",
    ],
    datasets: [
      {
        label: "Inaccurate AI Generated RCA",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Accurate AI Generated RCA",
        data: [8, 15, 13, 10, 7],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "RCA Accuracy",
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value) => `${value}%`, // Display y-axis values as percentages
        },
        max: 100, // Set maximum value to 100%
      },
    },
  };

  return (
    <div className="widget rca-accuracy">
      <h2>RCA Accuracy</h2>
      <Bar data={data} />
    </div>
  );
};

export default RCAAccuracy;
