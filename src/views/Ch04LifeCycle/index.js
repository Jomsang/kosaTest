import { Route, Switch} from "react-router-dom";
import Exam01CallbackMethod from "./Exam01CallbackMethod";
import Exam02UseEffect from "./Exam02UseEffect";

function Ch04LifeCycle(props) {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Ch04LifeCycle
            </div>
            <div className="card-body">
                <Switch>
                <Route path={`${props.match.url}/exam01`} exact component={Exam01CallbackMethod}/>
                <Route path={`${props.match.url}/exam02`} exact component={Exam02UseEffect}/>
                </Switch>
               

            </div>
        </div>


        </>
    );
}

export default Ch04LifeCycle;