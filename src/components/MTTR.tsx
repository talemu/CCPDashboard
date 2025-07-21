import React from "react";
import { Line } from "react-chartjs-2";

const MTTR = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "MTTR (Hours)",
        data: [8, 7, 6, 5, 7, 6],
        backgroundColor: "rgba(153,102,255,0.6)",
        borderColor: "rgba(153,102,255,1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div className="widget mttr">
      <h2>Mean Time to Recovery</h2>
      <Line data={data} />
    </div>
  );
};

export default MTTR;
