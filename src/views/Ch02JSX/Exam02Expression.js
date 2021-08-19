function fun(props) {
    return "동작"; //단방향 바인딩
}



function Exam02Expression(props) {
    const name = "React"; //단방향 바인딩
    return(
        <>
        <div className="card">
            <div className="card-header">
             Exam02Expression
            </div>
            <div className="card-body">
                <p>Hi, {name}!!</p>
                <p>{name}, {fun()}!</p>
                <p>{2+3}</p>
            </div>
        </div>
        </>

    );
}

export default Exam02Expression;