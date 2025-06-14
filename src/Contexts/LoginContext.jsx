import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../Slices/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import data from "../data";

const UserLoginContext = createContext();

function LoginContext({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const LoginHandler = (e, userData) => {
    e.preventDefault();
    const { username, email, password } = userData;

    if (!username || !email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    if (password.length <= 8) {
      toast.error("Password length must be more than 8 characters");
      return;
    }

    const findUser = data.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.email.toLowerCase() === email.toLowerCase() &&
        user.password === password
    );

    if (!findUser) {
      toast.error("Invalid username or password");
      return;
    }

    toast.success("User logged in successfully");
    dispatch(userActions.logindata(findUser));
    navigate("/dashboard");
  };
  return (
    <UserLoginContext.Provider
      value={{
        LoginHandler,
      }}
    >
      {children}
    </UserLoginContext.Provider>
  );
}

export default LoginContext;

export const useLoginContextContext = () => {
  return useContext(UserLoginContext);
};
