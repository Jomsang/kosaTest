import { useContext } from "react";
import ColorContext from "./ColorContext";

function ComBFun(props) {
    const colorContext =useContext(ColorContext);

    const handleChange = (event) => {
        colorContext.setColor("green");
    };

    return(
        <>
        <div className="card">
            <div className="card-header">
            ComBFun
            </div>
            <div className="card-body">
                 <button className="btn btn-info btn-sm mb-3" onClick={handleChange}>색깔 변경</button>
                <div style={{backgroundColor: colorContext.color }}>
                    내용
                </div>
            </div>
        </div>


        </>
    );
}

export default ComBFun;