import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const IncidentStatus = () => {
  const data = {
    labels: ["New", "In Progress", "Hold"],
    datasets: [
      {
        data: [10, 20, 5], // Mock values
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="widget">
      <h3>Incident Status</h3>
      <Pie data={data} />
    </div>
  );
};

export default IncidentStatus;
