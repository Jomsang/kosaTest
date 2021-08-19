import {Switch, Route} from "react-router-dom";
import Exam01ColorContext from "./Exam01ColorContext";
import Exam02AppContext from "./Exam02AppContext";
import Exam03ColorRedux from "./Exam03ColorRedux";
import Exam04AuthRedux from "./Exam04AuthRedux";
function Ch08GlobalState(props) {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Ch08GlobalState
            </div>
            <div className="card-body">
               <Switch>
                <Route path={`${props.match.url}/exam01`} exact component={Exam01ColorContext}/>
                <Route path={`${props.match.url}/exam02`} exact component={Exam02AppContext}/>
                <Route path={`${props.match.url}/exam03`} exact component={Exam03ColorRedux}/>
                <Route path={`${props.match.url}/exam04`} exact component={Exam04AuthRedux}/>
               </Switch>   
            </div>
        </div>


        </>
    );
}

export default Ch08GlobalState;