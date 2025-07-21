import React from "react";
import "./styling/GoalOverview.css";

const GoalOverview = () => {
  return (
    <div className="widget goal-overview">
      <div className="goal-overview">
        <h2>Goal Overview</h2>
        <p className="goal-summary">
          <h4>Goal:</h4> Improve cloud service reliability
        </p>
        <p>
          <h4>Description:</h4> Focus on reducing downtime and improving
          response times.
        </p>
      </div>
    </div>
  );
};

export default GoalOverview;
