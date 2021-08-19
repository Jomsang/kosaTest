import { Switch, Route } from "react-router-dom";
import Exam01Css from "./Exam01Css";
import Exam02Sass from "./Exam02Sass";
import Exam03StyledComponent from "./Exam03StyledComponent";

function Ch05Style(props) {
    return(
        <>
        <div className="card">
            <div className="card-header">
                Ch05Style
            </div>
            <div className="card-body">
                <Switch>
                <Route path={`${props.match.url}/exam01`} exact component={Exam01Css}/>
                <Route path={`${props.match.url}/exam02`} exact component={Exam02Sass}/>
                <Route path={`${props.match.url}/exam03`} exact component={Exam03StyledComponent}/>
                </Switch>
            </div>
        </div>
        

        </>
    );
}

export default Ch05Style;