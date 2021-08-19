import React from "react";
import { useState } from "react";
function ComBFun(props) {
    const [number, setNumber] = useState(0);

    const addNumber1 =(event) => {  //1만 증가함, 비동기이고, 콜백 함수가 없기 때문에
       setNumber(number + 1);
       setNumber(number + 1);
    }; 

    const addNumber2 =(event) => { //비동기이지만, 콜백 함수로 인해 순차적으로 실행이 됨. +2가 됨(prevNumber 상태값이 넘기고 넘어감)
      setNumber((z) => {
         return (
           z + 1
           )}); //하나만 return하기 때문에 return이랑 중괄호 생략 함.
      setNumber(z => z + 1);
    }; 

    
        return(
            <div className="card">
                  <div className="card-header">
                  ComBFun
                  </div>
                  <div className="card-body">
                     <h3>{number}</h3>
                     <button className="btn btn-info btm-sm mr-2" onClick={addNumber1}>숫자 증가1</button>
                     <button className="btn btn-info btm-sm mr-2" onClick={addNumber2}>숫자 증가2</button>
                  </div>
            </div>
        );
    
}

export default ComBFun;