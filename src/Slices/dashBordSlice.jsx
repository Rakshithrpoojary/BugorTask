import { createSlice } from "@reduxjs/toolkit";

const savedbugs = JSON.parse(localStorage.getItem("bugs")) || [];

const dashBoard = createSlice({
  name: "Dashboard",
  initialState: {
    bugs: savedbugs,
    filtervalues: savedbugs,
  },
  reducers: {
    addbug: (state, action) => {
      state.bugs = [...state.bugs, action.payload];
      state.filtervalues = state.bugs;
      localStorage.setItem("bugs", JSON.stringify(state.bugs));
    },
    editBug: (state, action) => {
      const editablebugIndex = state.bugs.findIndex(
        (bug) => bug.id === action.payload.id
      );
      state.bugs[editablebugIndex] = action.payload;
      state.filtervalues = state.bugs;
      localStorage.setItem("bugs", JSON.stringify(state.bugs));
    },
    deleteBug: (state, action) => {
      const deletebugs = state.bugs.filter((bug) => bug.id !== action.payload);
      state.bugs = deletebugs;
      state.filtervalues = state.bugs;
      localStorage.setItem("bugs", JSON.stringify(state.bugs));
    },
    filterAction: (state, action) => {
      const { status, assignto, priority } = action.payload;
      const filteredvalues = state.bugs?.filter(
        (bug) =>
          (status === "All" || bug.status === status) &&
          (assignto === "All" || bug.assignto === assignto) &&
          (priority === "All" || bug.priority === priority)
      );
      state.filtervalues = filteredvalues;
    },
    closebug: (state, action) => {
      const closedbugIndex = state.bugs.findIndex(
        (bug) => bug.id === action.payload
      );
      state.bugs[closedbugIndex].status = "Pending Approval";
      state.filtervalues = state.bugs;
      localStorage.setItem("bugs", JSON.stringify(state.bugs));
    },
    approveorreopen: (state, action) => {
      const closedbugIndex = state.bugs.findIndex(
        (bug) => bug.id === action.payload.id
      );
      state.bugs[closedbugIndex].status = action.payload.status;
      state.filtervalues = state.bugs;
      localStorage.setItem("bugs", JSON.stringify(state.bugs));
    },
  },
});
export const dashboardActions = dashBoard.actions;
export default dashBoard;
