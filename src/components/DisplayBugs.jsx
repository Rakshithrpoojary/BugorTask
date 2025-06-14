import "../Styles/DisplayBugs.css";
import EditBug from "./EditBug";
import { useCustomContext } from "../Contexts/userContext";
import Viewform from "./Viewform";
import DisplayBugsTable from "./DisplayBugsTable";

function DisplayBugs() {
  const { openForm, openViewForm } = useCustomContext();
  return (
    <div className="displaybug-container">
      <DisplayBugsTable />
      {openForm.formstate && <EditBug />}
      {openViewForm.formstate && <Viewform />}
    </div>
  );
}

export default DisplayBugs;
