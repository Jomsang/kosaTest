import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080"; //최초 실행을 한 번해야하기 때문에 index.js에서 import 해야 함.

export function addAuthHeader(authToken) {
    axios.defaults.headers.common["authToken"] = authToken; //항상 공통적으로 header가 실려서 넘어감.(서버에)
}                                                           //로그인이 성공 했을 대 호출(요청 메소드를 통해 헤더에 담아서 보내는 역할)

export function removeAuthHeader() {
    delete axios.defaults.headers.common["authToken"];      //로그아웃 했을 때 요청 메소드를 헤더에 담아서 보내 통해 호출
}