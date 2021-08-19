//상태 초기값 선언
const initialState = {
    color: "yellow"
};


//액션 타입 (이름) 선언
const SET_COLOR = "color/setColor"; //

//액션 생성 함수 선언
export const createSetColorAction = (color) => {    //ComBFun에 handleChange 함수 안에서 dispatch로 사용 됨.(color는 green으로 넘어 옴.)
    return {type: SET_COLOR, color};
};

//리듀스 선언
const colorReducer = (state=initialState, action) => { //state값이 주어지지 않으면 initialState로 주겠다, action은 위에  return {type: SET_COLOR, color};이거 임
    if(action.type === SET_COLOR) {
        return {color: action.color};
    }
    else{
        return state;  //해당 action이 아니면 원래(이전) 상태를 리턴,
    }
};

export default colorReducer;