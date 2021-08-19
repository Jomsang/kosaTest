import {Switch, Route} from "react-router-dom";
import BoardTable from "./BoardTable";
import BoardWriteForm from "./BoardWriteForm";
import BoardRead from "./BoardRead";
import BoardUpdateForm from "./BoardUpdateForm";
function Exam03Board(props) {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Exam03Board
            </div>
            <div className="card-body">
            <Switch>
                <Route path={`${props.match.url}`} exact component={BoardTable}/>
                <Route path={`${props.match.url}/writeForm`} exact component={BoardWriteForm}/>
                <Route path={`${props.match.url}/:bno/read`} exact component={BoardRead}/>
                <Route path={`${props.match.url}/:bno/updateForm`} exact component={BoardUpdateForm}/>
                
            </Switch>
            </div>
        </div>


        </>
    );
}

export default Exam03Board;