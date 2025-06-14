import React, { useState } from "react";
import { useCustomContext } from "../Contexts/userContext";
import { useDispatch, useSelector } from "react-redux";
import { dashboardActions } from "../Slices/dashBordSlice";
import "../Styles/DisplayBugs.css";

function DisplayBugsTable() {
  const dispatch = useDispatch();
  const { EditForm, ViewFormSubmit } = useCustomContext();

  const Displayallbugs = useSelector((data) => data.bugsdata);
  const loginInfo = useSelector((data) => data.userdata.userinfo);

  const [filterValue, setFilterValue] = useState({
    status: "All",
    assignto: "All",
    priority: "All",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilter = { ...filterValue, [name]: value };
    setFilterValue(updatedFilter);
    dispatch(dashboardActions.filterAction(updatedFilter));
  };

  const calculateTimeSpent = (createdDateStr) => {
    const [date, time] = createdDateStr.split(", ");
    const [day, month, year] = date.split("/");
    const formattedDate = `${year}-${month}-${day}T${time}`;
    const created = new Date(formattedDate);
    const now = new Date();
    const diffMs = now - created;
    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };
  const statusColors = {
    Open: "blue",
    Reopened: "orange",
    "To do": "purple",
    "In Progress": "green",
    Closed: "red",
  };

  return (
    <table className="table-full-container" border="1">
      <thead className="table-head">
        <tr>
          <th>Issue</th>
          <th>Reporter</th>
          <th>Created</th>
          <th>Total time spent</th>
          <th>
            <p className="filter-header">Status</p>
            <select onChange={handleFilterChange} name="status">
              <option>All</option>
              <option value="In Progress">In Progress</option>
              <option value="To do">To do</option>
              <option value="Closed">Closed</option>
              <option value="Reopened">Reopened</option>
              <option value="Open">Open</option>
            </select>
          </th>
          <th>
            <p className="filter-header">Assignee</p>
            <select onChange={handleFilterChange} name="assignto">
              <option>All</option>
              <option value="Rakshith">Rakshith</option>
              <option value="Ranjith">Ranjith</option>
              <option value="Rathan">Rathan</option>
              <option value="Rakesh">Rakesh</option>
            </select>
          </th>
          <th>
            <p className="filter-header">Severity</p>
            <select onChange={handleFilterChange} name="priority">
              <option>All</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {Displayallbugs?.filtervalues.map((bugs) => (
          <tr
            className={bugs.status === "Pending Approval" && "pending-approval"}
            key={bugs.id}
          >
            <td>{bugs.title}</td>
            <td>{bugs.reportedusername}</td>
            <td>{bugs.date}</td>
            <td>{calculateTimeSpent(bugs.date)}</td>
            <td>
              <p
                style={{
                  borderRadius: "1rem",
                  padding: "0.5rem",
                  color: "white",
                  backgroundColor: statusColors[bugs.status] || "gray",
                }}
              >
                {bugs.status}
              </p>
            </td>
            <td>{bugs.assignto}</td>
            <td>{bugs.priority}</td>
            <td className="action-btns">
              {loginInfo.role === "user" && (
                <>
                  <button
                    disabled={bugs.status === "Pending Approval"}
                    onClick={() => EditForm(bugs)}
                    className={
                      bugs.status === "Pending Approval"
                        ? "edit-btn-pending-ap"
                        : "edit-btn"
                    }
                  >
                    Edit
                  </button>
                  <button
                    disabled={bugs.status === "Pending Approval"}
                    onClick={() =>
                      dispatch(dashboardActions.deleteBug(bugs.id))
                    }
                    className={
                      bugs.status === "Pending Approval"
                        ? "delete-btn-pending-ap"
                        : "delete-btn"
                    }
                  >
                    Delete
                  </button>
                  <button
                    className={
                      bugs.status === "Pending Approval"
                        ? "close-btn-pending-ap"
                        : "close-btn"
                    }
                    disabled={bugs.status === "Pending Approval"}
                    onClick={() => dispatch(dashboardActions.closebug(bugs.id))}
                  >
                    Close
                  </button>
                </>
              )}
              {loginInfo.role === "manager" && (
                <button
                  className="view-btn"
                  onClick={() => ViewFormSubmit(bugs)}
                >
                  View
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DisplayBugsTable;
