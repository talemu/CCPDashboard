import React from "react";
import "./styling/Dashboard.css";
import AgentInsights from "../components/AgentInsights.tsx";
import GoalOverview from "../components/GoalOverview.tsx";
import GoalProgress from "../components/GoalProgress.tsx";
import KPIs from "../components/KPIs.tsx";
import ATRT from "../components/ATRT.tsx";
import MTTR from "../components/MTTR.tsx";
import RCAAccuracy from "../components/RCAAccuracy.tsx";
import TicketsWithAutomatedResolution from "../components/TicketsWithAutomatedResolution.tsx";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <h1>Cloud Control Panel Dashboard</h1>
        <div className="widgets">
          <AgentInsights />
          <GoalOverview />
          <GoalProgress />
        </div>
        <KPIs />
        <div className="widgets">
          <ATRT />
          <MTTR />
        </div>
        <div className="widgets">
          <RCAAccuracy />
          <TicketsWithAutomatedResolution />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
