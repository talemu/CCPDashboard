import React from "react";
import "./styling/GoalProgress.css";

const GoalProgress = () => {
  return (
    <div className="widget goal-progress full-width">
      <h2>Goal Progress</h2>
      <div className="progress-bar">
        <div className="progress" style={{ width: "75%" }}></div>
      </div>
      <span className="progress-percentage">75%</span>
      <div className="progress-summary no-spacing">
        <h3>Progress Summary</h3>
        <small className="last-updated">Last updated at 10:30 am, today</small>
        <p>
          Since the implementation of the RCA agent, the average ticket
          remediation time has decreased by 33%, from 3 days to 2 days. The RCA
          agent has effectively pinpointed recurring issues, leading to quicker
          resolutions and fewer escalations. The system's continous learning has
          improved effeciency, and we are on track to further reduce handle time
          by 15% over the next quarter.
        </p>
      </div>
    </div>
  );
};

export default GoalProgress;
