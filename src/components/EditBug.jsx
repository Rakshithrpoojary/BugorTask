import React, { useState, useRef } from "react";
import "../Styles/CreateBug.css";
import { useCustomContext } from "../Contexts/userContext";

function EditBug() {
  const editformref = useRef();

  const { openForm, EditBugHandler, EditForm } = useCustomContext();

  const [bugInfo, setBugInfo] = useState(
    openForm.bug || {
      id: openForm?.bug?.id,
      title: "",
      description: "",
      assignto: "Select",
      priority: "Select",
      status: "Select",
      date: "",
    }
  );
  const OnchangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBugInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const CloseEditForm = () => {
    document.addEventListener("click", (e) => {
      if (editformref.current && !editformref.current.contains(e.target)) {
        EditForm();
      }
    });
  };
  return (
    <div onClick={CloseEditForm} className="overlay">
      <form
        className="create-bug-container"
        ref={editformref}
        onSubmit={(e) => EditBugHandler(e, bugInfo)}
      >
        <label htmlFor="title">Title</label>
        <input
          value={bugInfo.title}
          onChange={OnchangeHandler}
          name="title"
          id="title"
        />
        <label htmlFor="description">Description</label>
        <textarea
          value={bugInfo.description}
          onChange={OnchangeHandler}
          name="description"
          id="description"
        />
        <label htmlFor="assignto">Assigne To</label>

        <select
          value={bugInfo.assignto}
          onChange={OnchangeHandler}
          name="assignto"
          id="assignto"
        >
          <option value="Select">Select</option>
          <option value="Rakshith">Rakshith</option>
          <option value="Ranjith">Ranjith</option>
          <option value="Rathan">Rathan</option>
          <option value="Rakesh">Rakesh</option>
        </select>

        <label htmlFor="priority">Priority</label>

        <select
          value={bugInfo.priority}
          onChange={OnchangeHandler}
          name="priority"
          id="priority"
        >
          <option value="Select">Select</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <label htmlFor="status">Status</label>

        <select
          value={bugInfo.status}
          onChange={OnchangeHandler}
          name="status"
          id="status"
        >
          <option value="Select">Select</option>
          <option value="In Progress">In Progress</option>
          <option value="To do">To do</option>
          <option value="Closed">Closed</option>
          <option value="Reopened">Reopened</option>
          <option value="Open">Open</option>
        </select>
        <label htmlFor="date">Date</label>
        <input
          value={bugInfo.date}
          onChange={OnchangeHandler}
          name="date"
          id="date"
          type="date"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditBug;
