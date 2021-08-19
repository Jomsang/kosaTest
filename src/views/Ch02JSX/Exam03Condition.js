const var1 = "리액트";
const var2 = false;
const var3 = "";
let var4;
const var5 = null;
const var6 = 0; //리액트에서는 숫자로 인식해서 나타남.
function Exam03Condition(props) {
    
    return(
        <>
        <div className="card">
            <div className="card-header">
            Exam03Condition
            </div>
            <div className="card-body">
               <div>
                <h6 className="text-info">삼항 연산식을 이용한 선택 렌더링</h6>
                    <div>{var1 === "리액트"? <p>내용1</p> : <p>내용 없음</p>} </div>
                    <div>{var1 !== "리액트"? <p>내용2</p> : null} </div>
               </div>
            </div>
            <div className="mt-4">
                <h6 className="text-info">&&를 이용한 선택 렌더링</h6> 
                {/* 원래의 &&과 다름. 맨 앞의 조건이 true이면 값이 나타나고, 아니면 아예 나타나지 않음 */}
                    <div>{var1 === "리액트" && <p>내용3</p>}</div>
                    <div>{var1 && <p>내용4</p>}</div>
                    <div>{var2 && <p>내용5</p>}</div>
                    <div>{var3 && <p>내용6</p>}</div>
                    <div>{var4 && <p>내용7</p>}</div>
                    <div>{var5 && <p>내용8</p>}</div>
                    <div>{var6 && <p>내용9</p>}</div> 
            
                    <div>{var6 !== 0 && <p>내용9.5</p>}</div>
            </div>

            <div className="mt-4">
                <h6 className="text-info">||를 이용한 선택 렌더링</h6> 
                    <div>{var1 || <p>내용10</p>}</div>
                    <div>{var2 || <p>내용11</p>}</div>
                    <div>{var3 || <p>내용12</p>}</div>
                    <div>{var4 || <p>내용13</p>}</div>
                    <div>{var5 || <p>내용14</p>}</div>
            </div>
        </div>
        </>
    );
}

export default Exam03Condition;