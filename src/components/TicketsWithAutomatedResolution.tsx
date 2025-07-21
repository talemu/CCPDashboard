import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const sampleData = {
  labels: ["24 Oct", "24 Nov", "24 Dec", "24 Jan", "24 Feb"],
  datasets: [
    {
      label: "Percentage",
      data: [75, 80, 85, 90, 95],
      backgroundColor: "#8884d8",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => `${context.raw}%`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: (value) => `${value}%`,
      },
    },
  },
};

const TicketsWithAutomatedResolution = () => {
  return (
    <div className="widget tickets-automated-resolution">
      <h2>Tickets with Automated Resolution</h2>
      <Bar data={sampleData} options={options} />
    </div>
  );
};

export default TicketsWithAutomatedResolution;
