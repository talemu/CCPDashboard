import React from "react";
import IncidentsSummary from "../components/IncidentsSummary.tsx";
import IncidentStatus from "../components/IncidentStatus.tsx";
import MyIncidents from "../components/MyIncidents.tsx";
import IncidentList from "../components/IncidentList.tsx";

const Incidents = () => {
  return (
    <>
      <div className="widgets">
        <IncidentsSummary />
        <IncidentStatus />
        <MyIncidents />
      </div>
      <IncidentList />
    </>
  );
};

export default Incidents;
