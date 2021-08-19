import { useReducer } from "react";
import reducer from "./number-Reducer";

// function reducer(prevstate, action) {   //상태를 변경하는 함수
//     if(action.type === "INCREMENT"){
//         return {
//             number: prevstate.number + 1
//         };
//     }
//     else if(action.type === "DECREMENT"){
//         return {
//             number: prevstate.number - 1
//         };
//     }
//     else{
//         return null;                  다양한 상태변화정의가능, 외부파일로 만들어서 다른 컴포넌트에서도 불러서 사용 가능하기 때문에(reducer쓰는 2가지 이유)
//     }
    
// }                                    함수를 js파일로 모듈화해서 불러와서 쓸 수 있음. import reducer from "./number-Reducer";

function ComAFun() {

    /*
    state: 초기상태
    dispatch: 상태 변경 !통보! 함수
    */
    const [state, dispatch] = useReducer(reducer, {number: 0});


    //이벤트 처리 함수
    const incrementCounter = (event) => {
        //상태 변경 통보
        dispatch({type:"INCREMENT"});
    };
    const decrementCounter = (event) => {
        dispatch({type:"DECREMENT"});
    }

    return(
        <>
         <div className="card">
            <div className="card-header">
                ComAFun
            </div>
            <div className="card-body">
                <p>현재 카운트 값: {state.number}</p>
                <button className="btn btn-primary btn-sm mr-2" onClick={incrementCounter}>증가</button>
                <button className="btn btn-primary btn-sm" onClick={decrementCounter}>감소</button>
            </div>
        </div>

        </>
    );
}

export default ComAFun;