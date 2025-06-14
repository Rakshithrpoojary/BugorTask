import React from "react";
import "../Styles/Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import DisplayBugs from "./DisplayBugs";
import Context from "../Contexts/userContext";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Context>
        <DashboardHeader />
        <DisplayBugs />
      </Context>
    </div>
  );
}

export default Dashboard;
