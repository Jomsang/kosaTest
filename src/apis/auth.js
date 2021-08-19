import axios from "axios";

export function login(user) {   //view에서 써야하니 export 해줘야 함.  ★AXIOS가 리턴하는건 모두 Promise를 리턴 함.
    const promise = axios.post("/auth/login", user);
    return promise;
}

export function join(user) {
    const promise = axios.post("/auth/join", user);
    return promise;
}