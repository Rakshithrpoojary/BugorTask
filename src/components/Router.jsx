import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import LoginContext from "../Contexts/LoginContext";
function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginContext>
            <Login />
          </LoginContext>
        }
      />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default Router;
