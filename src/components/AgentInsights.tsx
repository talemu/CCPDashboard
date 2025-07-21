import React, { useEffect, useState } from "react";
import "./styling/AgentInsights.css";
import { FaSyncAlt } from "react-icons/fa";
import AgentInsightsService, {
  Task,
} from "../services/AgentInsightsService.ts";

const AgentInsights = () => {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await AgentInsightsService.fetchAgentInsights();
      setLastUpdated(data.lastUpdated);
      setTasks(data.tasks);
    };

    fetchData();
  }, []);

  const handleButtonClick = (taskDescription: string) => {
    alert(`Task: ${taskDescription}`);
  };

  const handleReload = async () => {
    const data = await AgentInsightsService.fetchAgentInsights();
    setLastUpdated(data.lastUpdated);
    setTasks(data.tasks);
    alert("Data reloaded!");
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "Critical":
        return "rgb(139, 0, 0)"; // Reddish-brown
      case "High":
        return "red"; // Bright Red
      case "Medium":
        return "orange";
      case "Low":
        return "yellow";
      case "Not labelled":
        return "gray";
      default:
        return "white";
    }
  };

  const calculateTimeAgo = (lastUpdated: string) => {
    // Example logic to calculate "x minutes ago"
    const now = new Date();
    const updatedTime = new Date();
    const [hours, minutes] = lastUpdated.split(" ")[0].split(":").map(Number);
    updatedTime.setHours(hours, minutes, 0);
    const diffInMinutes = Math.floor(
      (now.getTime() - updatedTime.getTime()) / 60000
    );
    console.log(`${diffInMinutes} minutes ago`);
    return diffInMinutes < 60
      ? `${diffInMinutes} minutes ago`
      : `${Math.floor(diffInMinutes / 60)} hours ago`;
  };

  return (
    <div className="agent-insights">
      <div className="agent-header">
        <h2>Agent Insights</h2>
        <span>
          Last updated at {lastUpdated}{" "}
          <button className="reload-button" onClick={handleReload}>
            <FaSyncAlt />
          </button>
        </span>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <button
              onClick={() => handleButtonClick(task.description)}
              style={{ backgroundColor: getPriorityColor(task.priority) }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{task.status}</strong>
                <span>{calculateTimeAgo(task.lastUpdated)}</span>
              </div>
              <p>{task.description}</p>
            </button>
          </li>
        ))}
      </ul>
      <div className="legend">
        <ul>
          <li>
            <span style={{ color: "rgb(139, 0, 0)" }}>●</span> Critical
          </li>
          <li>
            <span style={{ color: "red" }}>●</span> High
          </li>
          <li>
            <span style={{ color: "orange" }}>●</span> Medium
          </li>
          <li>
            <span style={{ color: "yellow" }}>●</span> Low
          </li>
          <li>
            <span style={{ color: "gray" }}>●</span> Not labelled
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AgentInsights;
