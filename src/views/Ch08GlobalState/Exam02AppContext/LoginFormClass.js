import AppContext from "AppContext";
import React from "react";
class LoginFormClass extends React.Component{
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            uid: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            uid: event.target.value
        });
    };

    login = (event) => {
        this.context.setUid(this.state.uid);
    };

    logout = (event) => {
        this.context.setUid("");
    };

    render() {
        return (
            <div className="card">
            <div className="card-header">
            LoginForm 
            </div>
            <div className="card-body">
                <div className="form-group row">
                <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="uid" name="uid" value={this.state.uid} onChange={this.handleChange}/>
                    </div>
                </div>
                    {this.context.uid === "" ? (
                        <button className="btn btn-success btn-sm" onClick={this.login}>로그인</button>
                    ) : ( 
                        <button className="btn btn-success btn-sm" onClick={this.logout}>로그아웃</button>
                    )}
            </div>
          </div>
        );
    }
}

export default LoginFormClass ;