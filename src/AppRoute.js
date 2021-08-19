import { Route, Switch, Redirect } from "react-router-dom";
import Ch01ComponentDeclaration from "views/Ch01ComponentDeclaration";
import Ch02JSX from "views/Ch02JSX";
import Ch03PropsAndState from "views/Ch03PropsAndState";
import Ch04LifeCycle from "views/Ch04LifeCycle";
import Ch05Style from "views/Ch05Style";
import Ch06Route from "views/Ch06Route";
import Ch07PerformanceImprovement from "views/Ch07PerformanceImprovement";
import Ch08GlobalState from "views/Ch08GlobalState";
import Ch09Ajax from "views/Ch09Ajax";
import Home from "views/Home";
function AppRoute(props) {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/ch01" component={Ch01ComponentDeclaration}/>
            <Route path="/ch02" component={Ch02JSX}/>
            <Route path="/ch03" component={Ch03PropsAndState}/>
            <Route path="/ch04" component={Ch04LifeCycle}/>
            <Route path="/ch05" component={Ch05Style}/>
            <Route path="/ch06" component={Ch06Route}/>
            <Route path="/ch07" component={Ch07PerformanceImprovement}/>
            <Route path="/ch08" component={Ch08GlobalState}/>
            <Route path="/ch09" component={Ch09Ajax}/>
            
            <Redirect to="/"/>
        </Switch>
    );
}

export default AppRoute;