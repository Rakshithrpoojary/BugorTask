import React, { useState } from "react";
import "../Styles/Login.css";
import { useLoginContextContext } from "../Contexts/LoginContext";

function Login() {
  const { LoginHandler } = useLoginContextContext();

  const [userData, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserdata((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form id="login-container" onSubmit={(e) => LoginHandler(e, userData)}>
      <p className="logintitle">Login</p>
      <label htmlFor="username">Username</label>
      <input
        onChange={onChangeHandler}
        name="username"
        placeholder="Enter username..."
        id="username"
        type="text"
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={onChangeHandler}
        name="email"
        placeholder="Enter Email..."
        id="email"
        type="email"
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={onChangeHandler}
        name="password"
        placeholder="Enter password..."
        id="password"
        type="password"
      />
      <button id="login-btn" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
