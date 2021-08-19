import { combineReducers } from"redux";
import colorReducer from "./color-reducer";
import authReducer from "./auth-reducer";

const rootReducer = combineReducers({ //combine - 결합, 즉 root에 선언했던 reduce들을 여기에 넣어 줌
    colorReducer: colorReducer,
    authReducer: authReducer
});

export default rootReducer;