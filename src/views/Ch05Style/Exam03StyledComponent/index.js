import Box from "./Box";
import Button from "./Button";
function Exam03StyledComponent() {
    return(
        <>
        <div className="card">
            <div className="card-header">
            Exam03StyledComponent
            </div>
            <div className="card-body">
               <Box>
                   Box Component
               
               <Button>버튼1</Button>
               <Button inverted={true}>버튼2</Button>
               </Box>
            </div>
        </div>


        </>
    );
}

export default Exam03StyledComponent;