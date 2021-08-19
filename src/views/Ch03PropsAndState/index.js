import { Route, Switch} from "react-router-dom";
import Exam01Props from "./Exam01Props";
import Exam02State from "./Exam02State";
import Exam03UseReducer from "./Exam03UseReducer";
import Exam04StateInitFun from "./Exam04StateInitFun";
import Exam05StateToProp from "./Exam05StateToProp";
function Ch03PropsAndState(props) {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Ch03PropsAndState
            </div>
            <div className="card-body">
               <Switch>
                   <Route path={`${props.match.url}/exam01`} exact component={Exam01Props}/>
                   <Route path={`${props.match.url}/exam02`} exact component={Exam02State}/>
                   <Route path={`${props.match.url}/exam03`} exact component={Exam03UseReducer}/>
                   <Route path={`${props.match.url}/exam04`} exact component={Exam04StateInitFun}/>
                   <Route path={`${props.match.url}/exam05`} exact component={Exam05StateToProp}/>
               </Switch>
            </div>
        </div>


        </>
    );
}

export default Ch03PropsAndState;