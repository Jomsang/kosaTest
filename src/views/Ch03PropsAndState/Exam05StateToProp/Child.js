function Child(props) {
    const changeImg = (event) => {
        // props.img = "photo2.jpg"; (x) -  부모 컴포넌트의 상태를 자식 컴포넌트가 직접 못 바꿈.
        props.changeImg(); //부모의 changeImg() 함수를 호출 함.
    };
    return(
        <>
        <div className="card">
            <div className="card-header">
            Child
            </div>
            <div className="card-body">
                <button className="btn btn-info btn-sm" onClick={changeImg}>IMG 변경</button>
               <div className="mt-2">
                   <img src={"/resources/img/"+ props.img} alt="" width="150"/>
               </div>
            </div>
        </div>


        </>
    );
}

export default Child;