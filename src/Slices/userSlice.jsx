import { createSlice } from "@reduxjs/toolkit";
const userinfofromstorage = JSON.parse(localStorage.getItem("logininfo")) || {};

const userSlice = createSlice({
  name: "Dashboard",
  initialState: {
    userinfo: userinfofromstorage,
  },
  reducers: {
    logindata: (state, action) => {
      state.userinfo = action.payload;
      localStorage.setItem("logininfo", JSON.stringify(state.userinfo));
    },
    logout: (state, action) => {
      localStorage.removeItem("logininfo");
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice;
