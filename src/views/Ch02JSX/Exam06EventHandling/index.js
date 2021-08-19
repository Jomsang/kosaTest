import "../Exam05CssClass/style.css";
import ComAFunctionTypeEventHandling from "./ComAFunctionTypeEventHandling";
import ComBClassTypeEventHandling from "./ComBClassTypeEventHandling";
import ComCTwoWayBinding from "./ComCTwoWayBinding";
function Exam06EventHandling(props) {
  return (
    <div className="card">
      <div className="card-header">Exam06EventHandling</div>
      <div className="card-body">
        <ComAFunctionTypeEventHandling/>
        <div className="m-2"></div>
        <ComBClassTypeEventHandling/>
        <div className="m-2"></div>
        <ComCTwoWayBinding/>
      </div>
    </div>
  );
}
export default Exam06EventHandling;