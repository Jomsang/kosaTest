import { useRef } from "react";
function ComA(props) {
    const inputRef = useRef(); //DOM의 번지가 들어감.
    const divRef = useRef();
    const handleBtn = (event) => {
        inputRef.current.style.backgroundColor = "orange";
        inputRef.current.focus();//커서를 집중하게 함
        divRef.current.innerHTML = "<img src='/resources/img/photo8.jpg' width='200'/>";
    }

    return(
        <>
        <div className="card">
            <div className="card-header">
            ComA
            </div>
            <div className="card-body">
            <div className="form-row align-items-center">
                <input type="text" ref={inputRef}/>
                
                <button className="btn btn-primary btn-sm ml-2" onClick={handleBtn}>DOM 변화주기</button>
              </div>
              <div className="mt-2" ref={divRef}></div>
            </div>
        </div>


        </>
    );
}

export default ComA;