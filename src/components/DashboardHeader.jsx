import React from "react";
import "../Styles/DashboardHeader.css";
import CreateBug from "./CreateBug";
import { useCustomContext } from "../Contexts/userContext";

function DashboardHeader() {
  const { ShowHide, Show, Logout } = useCustomContext();

  return (
    <div>
      <header>
        <div className="logo-container">
          <img className="logo" src="logo.png" />
          <p className="logo-name">Bug Tracker</p>
        </div>
        <div className="button-container">
          <button id="create-newbtn" onClick={ShowHide}>
            Create New Bug
          </button>
          <button id="logout-btn" onClick={Logout}>
            Log Out
          </button>
        </div>
      </header>
      {Show && <CreateBug />}
    </div>
  );
}

export default DashboardHeader;
