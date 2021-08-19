import "./style.css";
const name = "React";
function Exam05CssClass(props) {
    //자바스크립트 주석
    /*
        여러행에 걸쳐 주석 내용을 작성할 때
    */
    return(
        <>
        <div className="card">
            <div 
            className="card-header" //부트스트랩의 클래스 적용
            >
            Exam05CssClass
            </div>
            <div className="card-body">
            <div 
            className="react" //style.css에 정의된 Class 적용
            >
                {name}</div> 
            </div>
        </div>

        {/* 리액트 주석 */}
        </>
    );
}

export default Exam05CssClass;