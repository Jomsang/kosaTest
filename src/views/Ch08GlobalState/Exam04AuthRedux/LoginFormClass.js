import React from "react";
import { connect } from "react-redux";
import { createSetUidAction } from "redux/auth-reducer";
class LoginFormClass extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            uid: ""
        };

        this.handleChange = this.handleChange.bind(this);
        
    }
    handleChange(event) {
        
        this.setState({
            uid: event.target.value
        });
    }

    login = (event) => {
        this.props.setUid(this.state.uid);
    }
    logout = (event) => {
        this.props.setUid("");
    }
    

    render() {
        
        return (
            <div className="card">
            <div className="card-header">
            LoginFormClass 
            </div>
            <div className="card-body">
                <div className="form-group row">
                <label htmlFor="uid" className="col-sm-2 col-form-label">User ID</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="uid" name="uid" value={this.state.uid} onChange={this.handleChange}/>
                    </div>
                </div>
                    {this.props.uid === "" ? (
                        <button className="btn btn-success btn-sm" onClick={this.login}>로그인</button>
                    ) : ( 
                        <button className="btn btn-success btn-sm" onClick={this.logout}>로그아웃</button>
                    )}
            </div>
          </div>
        );
    }
}
const mapStateToProps = (state) => ({ //얘가 LoginFormClass의 부모라 생각하면돰. authReducer의 리듀스와 연결시켜준 부분임
    
    uid: state.authReducer.uid      //props로 전달 됨, store에서 가져온 uid를 사용 함.
    
}); //ID 입력 후 로그인을 하면 mapDispatchToProps를 통해 dispatch되어 auth-reducer의 uid 상태를 로그인한 id로 변경하면, 이 함수(mapStateToProps)에서 변경된 uid를 LoginFormClass에 props로 넘겨 준다.



const mapDispatchToProps = (dispatch) => {  
    return {
        setUid: (uid) => dispatch(createSetUidAction(uid))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginFormClass); //prop으로 보내주는 역할

//따라서 맨 처음에 mapStateToProps는 auth-reducer에서 uid의 초기값이 "" 이기때 문에 변화가 없고 LoginFormClass의 생성자에서 처음에 uid가 "" 이기 때문에
//화면상에도 공백으로 보임 (왜냐면 생성자는 처음 마운트 될 때만 실행되고 안되기 때문에) id 인풋창에 id를 입력하고, login을 누르면 
//this.props.setUid(this.state.uid);가 mapDispatchToProps의  setUid: (uid) => dispatch(createSetUidAction(uid)) 를 실행하는거기 때문에 
//auth-router로 id가 dispatch로 통보되고 id상태를 현재 입력한 id로 바꿔주고 다시 props로  LoginFormClass에 건네주면 해당 id로 로그인이 되어 "로그아웃"이 나타나고
//auth-router의 상태는 입력한 id가 나타난다.