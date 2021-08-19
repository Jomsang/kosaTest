import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from 'App';
import reportWebVitals from 'reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from 'AppContext';
import { createStore } from 'redux';
import rootReducer from "redux/root-reducer";
import { Provider } from 'react-redux';
import { composeWithDevTools} from "redux-devtools-extension";
import { addAuthHeader } from "apis/axiosConfig";
import { createSetAuthTokenAction, createSetUidAction } from 'redux/auth-reducer';

const store = createStore(rootReducer, composeWithDevTools());//store - 개별 reduce(ex color-reducer)의 상태들을 총괄해서 관리하는 역할

//Redux에 인증 정보 설정
store.dispatch(createSetUidAction(sessionStorage.getItem("uid") || "")); // 처음 실행 시 (리프레시 하거나) 로그인을 유지하게 해주는 문
store.dispatch(createSetAuthTokenAction(sessionStorage.getItem("authToken") || ""));

//Axios에 인증 헤더 추가
if(sessionStorage.getItem("authToken")) { //리프레시해도 uid가 남게
  addAuthHeader(sessionStorage.getItem("authToken"));
}



//Provider는 Context를 사용하게 해줌, 즉 store를 전역(App)에 사용하게 해줌.
ReactDOM.render(
  
    <BrowserRouter>
      <Provider store={store}>  
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </Provider>
    </BrowserRouter>,
  
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log); - 개발 다 하고 서버에서 내려 받는 시간들을 테스트 할 때 콘솔로 확인 가능 ppt 15p
