function Exam04InlineCss(props) {
    const name = "React";
    const mystyle = {
        backgroundColor:"aqua",
        color:"red", 
        fontSize:"3em", 
        fontWeight:"bold", 
        padding:8
    };
    return(
        <>
        <div className="card">
            <div className="card-header">
            Exam04InlineCss
            </div>
            <div className="card-body">
               <div style={{backgroundColor:"black", color:"aqua", fontSize:"3em", fontWeight:"bold", padding:8}}>{name}</div>
               <hr/>
               <div style={mystyle}>{name}</div>
            </div>
        </div>


        </>
    );
}

export default Exam04InlineCss;