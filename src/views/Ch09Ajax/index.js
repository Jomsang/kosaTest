import {Switch, Route} from "react-router-dom";
import Exam01AsyncControl from "./Exam01AsyncControl";
import Exam02Auth from "./Exam02Auth";
import Exam03Board from "./Exam03Board";
import Exam04FileUploadDownload from "./Exam04FileUploadDownload";
function Ch09Ajax(props) {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Ch09Ajax
            </div>
            <div className="card-body">
               <Switch>
                <Route path={`${props.match.url}/exam01`} exact component={Exam01AsyncControl}/>
                <Route path={`${props.match.url}/exam02`} exact component={Exam02Auth}/>
                <Route path={`${props.match.url}/exam03`} component={Exam03Board}/>
                <Route path={`${props.match.url}/exam04`} component={Exam04FileUploadDownload}/>
               </Switch>

            </div>
        </div>


        </>
    );
}

export default Ch09Ajax;