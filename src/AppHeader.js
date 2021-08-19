import { removeAuthHeader } from "apis/axiosConfig";
import AppContext from "AppContext";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { createSetAuthTokenAction, createSetUidAction } from "redux/auth-reducer";
function AppHeader(props) {
    //context
    const appContext = useContext(AppContext);
    
    //Redux
    const globaluid = useSelector( (state) => state.authReducer.uid);
    const dispatch = useDispatch();

    const logout = (event) => {
        //context
        appContext.setUid("");       
        
        //Redux
        removeAuthHeader();
        dispatch(createSetUidAction(""));   
        dispatch(createSetAuthTokenAction(""));

        //세션스토리지에 인증 내용 제거
        sessionStorage.removeItem("uid");
        sessionStorage.removeItem("authToken");
        
    };

    return (
        <nav className="navbar bg-dark navbar-dark text-white font-weight-bold justify-content-between">
                <Link to="/" className="navbar-brand">
                    <img src="/logo512.png" alt="" width="30" height="30" className="align-top"/>
                    {' '} React
                </Link>
            <div>
                {appContext.uid ==="" && globaluid === ""?
                <Link to="/ch09/exam02" className="btn btn-success btn-sm">로그인</Link>
                :
                <div className="d-flex align-items-center">
                    <span className="mr-2">User ID: {appContext.uid || globaluid}</span>
                <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button>
                </div>
                }
            </div>
        </nav>
    );
}

export default AppHeader;