import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../Slices/userSlice";
import { dashboardActions } from "../Slices/dashBordSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Context = createContext();

function userContext({ children }) {
  const [Show, hide] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [openForm, setOpenForm] = useState({
    formstate: false,
    bug: {},
  });
  const [openViewForm, setOpenViewForm] = useState({
    formstate: false,
    bug: {},
  });
  const EditForm = (bugs = null) => {
    setOpenForm((prev) => ({
      formstate: !prev.formstate,
      bug: bugs,
    }));
  };
  const Logout = () => {
    dispatch(userActions.logout());
    navigate("/");
  };
  const ViewFormSubmit = (bugs = null) => {
    setOpenViewForm((prev) => ({
      formstate: !prev.formstate,
      bug: bugs,
    }));
  };

  const ShowHide = () => {
    console.log("hi");
    hide(!Show);
  };
  const SubmitBug = (e, bugInfo) => {
    e.preventDefault();
    const { title, description, date } = bugInfo;

    if (!title || !description || !date) {
      toast.error("Please fill all the fields");
      return;
    }
    dispatch(dashboardActions.addbug(bugInfo));
    ShowHide();
  };

  const EditBugHandler = (e, bugInfo) => {
    e.preventDefault();
    const { title, description, date } = bugInfo;

    if (!title || !description || !date) {
      toast.error("Please fill all the fields");
      return;
    }
    dispatch(dashboardActions.editBug(bugInfo));
    EditForm();
  };

  const ApproveorreopenHandler = (status, id) => {
    dispatch(dashboardActions.approveorreopen({ status, id }));
    ViewFormSubmit();
  };
  return (
    <Context.Provider
      value={{
        SubmitBug,
        EditBugHandler,
        Logout,
        ShowHide,
        Show,
        EditForm,
        openForm,
        ViewFormSubmit,
        openViewForm,
        ApproveorreopenHandler,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default userContext;

export const useCustomContext = () => {
  return useContext(Context);
};
