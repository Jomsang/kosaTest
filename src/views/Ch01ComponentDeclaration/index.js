import { Route, Switch} from "react-router-dom";
import ComB from "./ComA";
import ComA from "./ComB";
function Ch01ComponentDeclaration(props) {
  console.log(props);
    return (
        <div className="card">
      <div className="card-header">
      Ch01ComponentDeclaration
      </div>
      <div className="card-body">
      <Switch>
            <Route path={`${props.match.url}/coma`} exact component={ComA}/>
            <Route path={`${props.match.url}/comb`} exact component={ComB}/>
        </Switch>
      </div>
    </div>
    );
}

export default Ch01ComponentDeclaration;