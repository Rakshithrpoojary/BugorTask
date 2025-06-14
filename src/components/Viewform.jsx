import React, { useRef } from "react";
import "../Styles/CreateBug.css";
import { useCustomContext } from "../Contexts/userContext";

function Viewform() {
  const viewformref = useRef();

  const { ViewFormSubmit, openViewForm, ApproveorreopenHandler } =
    useCustomContext();

  const CloseForm = () => {
    document.addEventListener("click", (e) => {
      if (viewformref.current && !viewformref.current.contains(e.target)) {
        ViewFormSubmit();
      }
    });
  };

  return (
    <div onClick={CloseForm} className="overlay">
      <form className="create-bug-container" ref={viewformref}>
        <label htmlFor="title">Title</label>
        <input defaultValue={openViewForm.bug.title} name="title" id="title" />
        <label htmlFor="description">Description</label>
        <textarea
          defaultValue={openViewForm.bug.description}
          name="description"
          id="description"
        />
        <label htmlFor="assignto">Assigne To</label>

        <select
          defaultValue={openViewForm.bug.assignto}
          name="assignto"
          id="assignto"
        >
          <option value="Select">Select</option>
          <option value="Rakshith">Rakshith</option>
        </select>

        <label htmlFor="priority">Priority</label>

        <select
          defaultValue={openViewForm.bug.priority}
          name="priority"
          id="priority"
        >
          <option value="Select">Select</option>
          <option value="P2">P2</option>
          <option value="P3">P3</option>
        </select>
        <label htmlFor="status">Status</label>

        <select
          defaultValue={openViewForm.bug.status}
          name="status"
          id="status"
        >
          <option value="Select">Select</option>
          <option value="In Progress">In Progress</option>
        </select>
        <label htmlFor="date">Date</label>
        <input
          defaultValue={openViewForm.bug.date}
          name="date"
          id="date"
          type="date"
        />
        <button
          onClick={() => ApproveorreopenHandler("Closed", openViewForm.bug.id)}
          type="button"
          id="approve"
        >
          Approve
        </button>
        <button
          onClick={() =>
            ApproveorreopenHandler("Reopened", openViewForm.bug.id)
          }
          type="button"
          id="reopen"
        >
          Reopen
        </button>
        <button onClick={ViewFormSubmit} type="button" id="goback">
          Go Back
        </button>
      </form>
    </div>
  );
}

export default Viewform;
