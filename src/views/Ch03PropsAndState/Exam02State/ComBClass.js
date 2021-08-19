import React from "react";
class ComBClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    addNumber1 =(event) => {
        this.setState({
            number: this.state.number + 2
        });
        
    }; 

    addNumber2 =(event) => {
        this.setState((prevState) => {      //★ 위에 처럼도 되지만 setState 자체는 비동기이지만 안에 prevState로 선언한 함수는 "콜백"이 되기 때문에 +2 동작이 됨. 이렇게 하면 성능향상 효과★
            return {
                number: prevState.number + 1
            }
        });
        this.setState((prevState) => {          
            return {
                number: prevState.number + 1
            }
        });
    }; 

    render() {
        return(
            <div className="card">
                  <div className="card-header">
                  ComBClass
                  </div>
                  <div className="card-body">
                     <h3>{this.state.number}</h3>
                     <button className="btn btn-info btm-sm mr-2" onClick={this.addNumber1}>숫자 증가1</button>
                     <button className="btn btn-info btm-sm mr-2" onClick={this.addNumber2}>숫자 증가2</button>
                  </div>
            </div>
        );
    }
}

export default ComBClass;