import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaPause,
  FaRedo,
  FaEllipsisH,
} from "react-icons/fa";
import IncidentSidebar from "./IncidentSidebar.tsx";
import "./styling/IncidentList.css";

const IncidentList = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const incidents = [
    {
      id: 1,
      incidentId: "INC0000001",
      incidentName: "Critical System Outage",
      title: "Production Database Connection Failure",
      assignedTo: "John Doe",
      state: "New",
      dateOpened: "01-10-2023 08:15 AM",
      lastUpdated: "01-10-2023 10:30 AM",
      priority: "P1",
      urgency: 1,
      assignmentGroup: "Database Team",
      category: "Software",
      subCategory: "Database",
      categoryType: "Incident",
      channel: "Email",
      closedDate: "",
      resolvedOn: "",
      shortDescription: "System outage in region A affecting all users",
      description:
        "Complete system outage in region A due to database connectivity issues. All services are currently unavailable. Impact: 10,000+ users affected.",
      agentActivity: "Assigned to John Doe",
    },
    {
      id: 2,
      incidentId: "INC0000002",
      incidentName: "Performance Degradation",
      title: "Slow Response Time on Web Server",
      assignedTo: "Jane Smith",
      state: "In Progress",
      dateOpened: "02-10-2023 01:00 PM",
      lastUpdated: "02-10-2023 02:15 PM",
      priority: "P3",
      urgency: 3,
      assignmentGroup: "Infrastructure Team",
      category: "Hardware",
      subCategory: "Server",
      categoryType: "Incident",
      channel: "Phone",
      closedDate: "",
      resolvedOn: "",
      shortDescription: "Slow response time on server B",
      description:
        "Server B is experiencing significant performance degradation with response times exceeding 5 seconds. Users reporting slow page loads.",
      agentActivity: "Investigating by Jane Smith",
    },
    {
      id: 3,
      incidentId: "INC0000003",
      incidentName: "UI Display Issue",
      title: "Dashboard Widget Not Loading",
      assignedTo: "Alex Johnson",
      state: "Resolved",
      dateOpened: "03-10-2023 09:00 AM",
      lastUpdated: "03-10-2023 09:45 AM",
      priority: "P5",
      urgency: 5,
      assignmentGroup: "Frontend Team",
      category: "Software",
      subCategory: "User Interface",
      categoryType: "Incident",
      channel: "Self-Service",
      closedDate: "03-10-2023 09:45 AM",
      resolvedOn: "03-10-2023 09:45 AM",
      shortDescription: "Minor UI bug in dashboard",
      description:
        "Dashboard widget fails to load properly in certain browsers. Workaround: refresh page or use different browser.",
      agentActivity: "Resolved by Alex Johnson",
    },
  ];

  const handleIncidentClick = (incident) => {
    setSelectedIncident(incident);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setSelectedIncident(null);
  };

  return (
    <div className="incident-list-container">
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
              <th>State</th>
              <th>Priority</th>
              <th>Urgency</th>
              <th>Description</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td>
                  <span
                    className="incident-id-link"
                    onClick={() => handleIncidentClick(incident)}
                  >
                    {incident.incidentId}
                  </span>
                </td>
                <td>{incident.state}</td>
                <td>{incident.priority}</td>
                <td>{incident.urgency}</td>
                <td>{incident.shortDescription}</td>
                <td>{incident.lastUpdated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <IncidentSidebar
        isOpen={sidebarOpen}
        incident={selectedIncident}
        onClose={closeSidebar}
      />
    </div>
  );
};

export default IncidentList;
