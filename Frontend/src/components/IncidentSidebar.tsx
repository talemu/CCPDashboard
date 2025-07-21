import React from "react";
import { FaTimes } from "react-icons/fa";
import "./styling/IncidentSidebar.css";

interface Incident {
  id: number;
  incidentId: string;
  incidentName: string;
  title: string;
  assignedTo: string;
  state: string;
  dateOpened: string;
  lastUpdated: string;
  priority: string;
  urgency: number;
  assignmentGroup: string;
  category: string;
  subCategory: string;
  categoryType: string;
  channel: string;
  closedDate: string;
  resolvedOn: string;
  shortDescription: string;
  description: string;
  agentActivity: string;
}

interface IncidentSidebarProps {
  isOpen: boolean;
  incident: Incident | null;
  onClose: () => void;
}

const IncidentSidebar: React.FC<IncidentSidebarProps> = ({
  isOpen,
  incident,
  onClose,
}) => {
  if (!isOpen || !incident) {
    return null;
  }

  return (
    <div className="incident-sidebar">
      <div className="sidebar-header">
        <h3>Incident Details</h3>
        <div className="close-icon" onClick={onClose}>
          <FaTimes title="Close" />
        </div>
      </div>
      <div className="sidebar-content">
        <div className="detail-row">
          <label>Incident ID:</label>
          <span>{incident.incidentId}</span>
        </div>
        <div className="detail-row">
          <label>Incident Name:</label>
          <span>{incident.incidentName}</span>
        </div>
        <div className="detail-row">
          <label>Title:</label>
          <span>{incident.title}</span>
        </div>
        <div className="detail-row">
          <label>Assigned to:</label>
          <span>{incident.assignedTo}</span>
        </div>
        <div className="detail-row">
          <label>State:</label>
          <span
            className={`state-badge ${incident.state
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {incident.state}
          </span>
        </div>
        <div className="detail-row">
          <label>Date Opened:</label>
          <span>{incident.dateOpened}</span>
        </div>
        <div className="detail-row">
          <label>Last Updated:</label>
          <span>{incident.lastUpdated}</span>
        </div>
        <div className="detail-row">
          <label>Priority:</label>
          <span className={`priority-badge ${incident.priority.toLowerCase()}`}>
            {incident.priority}
          </span>
        </div>
        <div className="detail-row">
          <label>Urgency:</label>
          <span className="urgency-level">{incident.urgency}</span>
        </div>
        <div className="detail-row">
          <label>Assignment Group:</label>
          <span>{incident.assignmentGroup}</span>
        </div>
        <div className="detail-row">
          <label>Category:</label>
          <span>{incident.category}</span>
        </div>
        <div className="detail-row">
          <label>Sub-category:</label>
          <span>{incident.subCategory}</span>
        </div>
        <div className="detail-row">
          <label>Category Type:</label>
          <span>{incident.categoryType}</span>
        </div>
        <div className="detail-row">
          <label>Channel:</label>
          <span>{incident.channel}</span>
        </div>
        {incident.closedDate && (
          <div className="detail-row">
            <label>Closed Date:</label>
            <span>{incident.closedDate}</span>
          </div>
        )}
        {incident.resolvedOn && (
          <div className="detail-row">
            <label>Resolved on:</label>
            <span>{incident.resolvedOn}</span>
          </div>
        )}
        <div className="detail-row">
          <label>Short Description:</label>
          <span>{incident.shortDescription}</span>
        </div>
        <div className="detail-row">
          <label>Description:</label>
          <span>{incident.description}</span>
        </div>
      </div>
    </div>
  );
};

export default IncidentSidebar;
