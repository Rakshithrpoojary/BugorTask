import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { BugStore } from "./Store/ReduxStore";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={BugStore}>
      <Router />
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </BrowserRouter>
);
