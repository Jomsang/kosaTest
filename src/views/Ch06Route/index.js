import {Switch, Route} from "react-router-dom";
import BoardTable from "./BoardTable";
import BoardRead from "./BoardRead";
import BoardUpdateForm from "./BoardUpdateForm";
import BoardWriteForm from "./BoardWriteForm";
function Ch06Route(props) {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Ch06Route
            </div>
            <div className="card-body">
               <Switch>
                    <Route path={`${props.match.url}`} exact component={BoardTable}/>
                    <Route path={`${props.match.url}/:bno/read`} exact component={BoardRead}/>
                    {/* BoardTable의 게시물 읽기부분 형식을 넘겨줘야 함 (노션 참고)*/}
                    <Route path={`${props.match.url}/:bno/updateForm`} exact component={BoardUpdateForm}/>
                    <Route path={`${props.match.url}/writeForm`} exact component={BoardWriteForm}/>
               </Switch>
            </div>
        </div>


        </>
    );
}

export default Ch06Route;