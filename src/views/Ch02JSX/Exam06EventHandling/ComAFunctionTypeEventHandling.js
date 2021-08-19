function ComAFunctionTypeEventHandling(props) {
    const handleBtn1 = (event) => {
        console.log("버튼 1이 클릭되었습니다.");
        console.log(event.target);
        console.log(event.type);
    };

    const handleBtn2 = (event, x, y) => {
        console.log("버튼 2이 클릭되었습니다.");
        const result = x + y;
        console.log(result);
        console.log(event.target.name);
        console.log(event.type);
    };
    return(
        <>
        <div className="card">
            <div className="card-header">
            ComAFunctionTypeEventHandling
            </div>
            <div className="card-body">
                <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={handleBtn1}>버튼 1</button>
                <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event)=>{handleBtn2(event, 3, 5);}}>버튼 2</button>
            </div>
        </div>


        </>
    );
}

export default ComAFunctionTypeEventHandling;