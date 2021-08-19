import Exam01WrapElement from "./Exam01WrapElement";
import Exam02Expression from "./Exam02Expression";
import Exam03Condition from "./Exam03Condition";
import Exam04InlineCss from "./Exam04InlineCss";
import Exam05CssClass from "./Exam05CssClass";
import Exam06EventHandling from "./Exam06EventHandling";
import Exam07Repeat from "./Exam07Repeat";
import Exam08Ref from "./Exam08Ref";
const { Switch, Route } = require("react-router-dom");

function Ch02JSX(props) {
    return (
        <div className="card">
            <div className="card-header">
                Ch02JSX
            </div>
            <div className="card-body">
                <Switch>
                    <Route path={`${props.match.url}/exam01`} exact component={Exam01WrapElement}/>
                    <Route path={`${props.match.url}/exam02`} exact component={Exam02Expression}/>
                    <Route path={`${props.match.url}/exam03`} exact component={Exam03Condition}/>
                    <Route path={`${props.match.url}/exam04`} exact component={Exam04InlineCss}/>
                    <Route path={`${props.match.url}/exam05`} component={Exam05CssClass}/>
                    <Route path={`${props.match.url}/exam06`} component={Exam06EventHandling}/>
                    <Route path={`${props.match.url}/exam07`} component={Exam07Repeat}/>
                    <Route path={`${props.match.url}/exam08`} component={Exam08Ref}/>
                </Switch>
            </div>
      </div>
    );
}

export default Ch02JSX;