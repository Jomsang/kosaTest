import { useState } from "react";
import ClassType from "./ClassType";

function Exam01CallbackMethod(props) {
    const [startNum, setStartNum] = useState(0);
    const handleChange = (event) => {
        setStartNum(parseInt(event.target.value));//input을 통해 받은 값은 문자열로 날라오기 때문에 숫자화 해줘야 함
    }
    return(
        <>
        <div className="card">
            <div className="card-header">
            Exam01CallbackMethod
            </div>
            <div className="card-body">
                <input className="mb-3" type="number" name="startNum" value={startNum} onChange={handleChange}/>
                <ClassType startNum={startNum}/>
               {/* 자식의 props로 넘겨 줌 */}
            </div>
        </div>


        </>
    );
}

export default Exam01CallbackMethod;