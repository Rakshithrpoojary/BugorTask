import { configureStore } from "@reduxjs/toolkit";
import dashBoard from "../Slices/dashBordSlice";
import userSlice from "../Slices/userSlice";
export const BugStore = configureStore({
  reducer: {
    bugsdata: dashBoard.reducer,
    userdata: userSlice.reducer,
  },
});
