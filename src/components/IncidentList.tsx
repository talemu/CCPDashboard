import React from "react";
import {
  FaSearch,
  FaFilter,
  FaPause,
  FaRedo,
  FaEllipsisH,
} from "react-icons/fa";
import "./IncidentList.css";

const IncidentList = () => {
  const incidents = [
    {
      id: 1,
      incidentId: "INC0000001",
      name: "Incident 1",
      state: "New",
      priority: "P1",
      urgency: 1,
      description: "System outage in region A.",
      agentActivity: "Assigned to John Doe",
      lastUpdated: "01-10-2023 10:30 AM",
    },
    {
      id: 2,
      incidentId: "INC0000002",
      name: "Incident 2",
      state: "In Progress",
      priority: "P3",
      urgency: 3,
      description: "Slow response time on server B.",
      agentActivity: "Investigating by Jane Smith",
      lastUpdated: "02-10-2023 02:15 PM",
    },
    {
      id: 3,
      incidentId: "INC0000003",
      name: "Incident 3",
      state: "Resolved",
      priority: "P5",
      urgency: 5,
      description: "Minor UI bug in dashboard.",
      agentActivity: "Resolved by Alex Johnson",
      lastUpdated: "03-10-2023 09:45 AM",
    },
  ];

  return (
    <div className="widget incident-list">
      <div className="incident-list-header">
        <h2>My incidents</h2>
        <div className="incident-list-actions">
          <div className="icon">
            <FaSearch title="Search" />
          </div>
          <div className="icon">
            <FaFilter title="Filters" />
          </div>
          <div className="icon">
            <FaPause title="Pause" />
          </div>
          <div className="icon">
            <FaRedo title="Reload" />
          </div>
          <div className="icon">
            <FaEllipsisH title="More options" />
          </div>
        </div>
      </div>
      <table className="incident-list-table">
        <thead>
          <tr>
            <th>Incident ID</th>
            <th>Name</th>
            <th>State</th>
            <th>Priority</th>
            <th>Urgency</th>
            <th>Description</th>
            <th>Agent Activity</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.incidentId}</td>
              <td>{incident.name}</td>
              <td>{incident.state}</td>
              <td>{incident.priority}</td>
              <td>{incident.urgency}</td>
              <td>{incident.description}</td>
              <td>{incident.agentActivity}</td>
              <td>{incident.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncidentList;
