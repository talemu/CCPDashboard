import React from "react";
import "./IncidentsSummary.css"; // Assuming a CSS file for styling

const IncidentsSummary = () => {
  const incidentData = {
    P1: 10,
    P2: 20,
    P3: 30,
    P4: 40,
    P5: 50,
  };

  return (
    <div className="widget incidents-summary">
      <h3>Incidents Summary</h3>
      <div className="row">
        <div className="box">
          <div className="level">P1</div>
          <div className="count">{incidentData.P1}</div>
        </div>
        <div className="box">
          <div className="level">P2</div>
          <div className="count">{incidentData.P2}</div>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <div className="level">P3</div>
          <div className="count">{incidentData.P3}</div>
        </div>
        <div className="box">
          <div className="level">P4</div>
          <div className="count">{incidentData.P4}</div>
        </div>
        <div className="box">
          <div className="level">P5</div>
          <div className="count">{incidentData.P5}</div>
        </div>
      </div>
    </div>
  );
};

export default IncidentsSummary;
