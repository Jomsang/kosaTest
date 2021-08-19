import { useDispatch, useSelector } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";

function ComBFun(props) {
    const color = useSelector((state) => {  //전역 상태를 가져오겠다.(store의 state)
        return state.colorReducer.color     //"color"라는 state를 가져오겠다.
    });

    const dispatch = useDispatch();         //store 의 dispatch를 가져 옴

    const handleChange = (event) => {
        dispatch(createSetColorAction("green"));    //createSetColorAction을 갖는 dispatch를 가져오겠다.
    };                                              //즉 색깔을 바꾸고 싶으면 dispatch를 통해 createSetColorAction를 호출해서 통보 함.



    return(
        <>
        <div className="card">
            <div className="card-header">
            ComBFun
            </div>
            <div className="card-body">
            <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
                <div style={{backgroundColor: color}}>
                    내용
                </div>
            </div>
        </div>


        </>
    );
}

export default ComBFun;