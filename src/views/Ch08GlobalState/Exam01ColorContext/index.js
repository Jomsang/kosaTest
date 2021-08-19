import { ColorContextProvider } from "./ColorContext";
import ComAClass from "./ComAClass";
import ComBFun from "./ComBFun";

function Exam01ColorContext() {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Exam01ColorContext
            </div>
            <div className="card-body">
                <ColorContextProvider>
                    <ComAClass/>
                    <ComBFun/>
                </ColorContextProvider>
               
            </div>
        </div>


        </>
    );
}

export default Exam01ColorContext;