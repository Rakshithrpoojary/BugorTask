import React, { useRef, useState } from "react";
import "../Styles/CreateBug.css";
import { useCustomContext } from "../Contexts/userContext";
import { useSelector } from "react-redux";

function CreateBug() {
  const { SubmitBug, ShowHide } = useCustomContext();
  const loginInfo = useSelector((data) => data.userdata.userinfo);

  const [bugInfo, setBugInfo] = useState({
    id: Date.now(),
    reportedusername: loginInfo.username,
    title: "",
    description: "",
    assignto: "Select",
    priority: "Select",
    status: "Select",
    date: "",
  });

  const OnchangeHandler = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;
    if (name === "date") {
      const date = new Date(value);
      formattedValue = date.toLocaleString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    }
    setBugInfo((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const createformref = useRef();

  const CloseCreateForm = () => {
    document.addEventListener("click", (e) => {
      if (createformref.current && !createformref.current.contains(e.target)) {
        ShowHide();
      }
    });
  };
  return (
    <div onClick={CloseCreateForm} className="overlay">
      <form
        className="create-bug-container"
        ref={createformref}
        onSubmit={(e) => SubmitBug(e, bugInfo)}
      >
        <label htmlFor="title">Title</label>
        <input onChange={OnchangeHandler} name="title" id="title" />
        <label htmlFor="description">Description</label>
        <textarea
          onChange={OnchangeHandler}
          name="description"
          id="description"
        />
        <label htmlFor="assignto">Assigne To</label>
        <select onChange={OnchangeHandler} name="assignto" id="assignto">
          <option value="Select">Select</option>
          <option value="Rakshith">Rakshith</option>
          <option value="Ranjith">Ranjith</option>
          <option value="Rathan">Rathan</option>
          <option value="Rakesh">Rakesh</option>
        </select>
        <label htmlFor="priority">Priority</label>
        <select onChange={OnchangeHandler} name="priority" id="priority">
          <option value="Select">Select</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label htmlFor="status">Status</label>
        <select onChange={OnchangeHandler} name="status" id="status">
          <option value="Select">Select</option>
          <option value="In Progress">In Progress</option>
          <option value="To do">To do</option>
          <option value="Closed">Closed</option>
          <option value="Reopened">Reopened</option>
          <option value="Open">Open</option>
        </select>
        <label htmlFor="date">Date</label>
        <input
          onChange={OnchangeHandler}
          name="date"
          id="date"
          type="datetime-local"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateBug;
