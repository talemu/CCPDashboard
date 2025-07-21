import React from "react";
import "./styling/KPIs.css";

const KPIs = () => {
  return (
    <div className="kpis full-width">
      <h2>KPIs</h2>
      <ul>
        <li className="ticket-remediation">
          <div className="icon">⭐ Saving goal</div>
          <h2>20%</h2>Reduction in Average Ticket Remediation Time
        </li>
        <li>
          <div className="icon">🏗️ Current standing</div>
          <h2>15%</h2>Current ATRT Reduction{" "}
        </li>
        <li>
          <div className="icon">⚡ Velocity</div>
          <h2>5%</h2>Reduction of ATRT/Month
        </li>
        <li>
          <div className="icon">🏅 Quality</div>
          <h2>25%</h2>Reduction in Mean Time to Resolution
        </li>
        <li>
          <div className="icon">🏅 Quality</div>
          <h2>90%</h2>Accuracy of Root Cause Analysis
        </li>
        <li>
          <div className="icon">🏅 Quality</div>
          <h2>60%</h2>Tickets with Automated Resolutions
        </li>
      </ul>
    </div>
  );
};

export default KPIs;
