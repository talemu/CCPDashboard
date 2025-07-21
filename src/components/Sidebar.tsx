import React from "react";
import "./styling/Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-list">
          {/* Home Category */}
          <li className="category">
            <strong className="category-title">Home</strong>
            <ul className="subitem-list">
              <li>
                <a href="/dashboard" className="subitem-link">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>
          {/* CCP Agent System Category */}
          <li className="category">
            <strong className="category-title">CCP Agent System</strong>
            <ul className="subitem-list">
              <li>
                <a href="/goal-monitoring" className="subitem-link">
                  Goal Monitoring
                </a>
              </li>
            </ul>
          </li>
          {/* Service Management Category */}
          <li className="category">
            <strong className="category-title">Service Management</strong>
            <ul className="subitem-list">
              <li>
                <a href="/incidents" className="subitem-link">
                  Incidents
                </a>
              </li>
              <li>
                <a href="/change-requests" className="subitem-link">
                  Change Requests
                </a>
              </li>
              <li>
                <a href="/major-incidents" className="subitem-link">
                  Major Incidents
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
