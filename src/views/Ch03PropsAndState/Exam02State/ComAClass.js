import React from "react";
function getRandomColor() {
    return "#" + Math.floor(Math.random()*parseInt("ffffff", 16)).toString(16); //색깔 랜덤으로 나타내게 하기
}

function getRandomcount() {
    return parseInt(Math.random() * 11);
}
class ComA extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number:0,
            color:"black"
        };
        this.addNumber = this.addNumber.bind(this); //addNumber를 메소드로 선언했기 때문에 클래스에서는 bind 설정 해줘야 함.
        //this.changeColor = this.changeColor.bind(this); - changeColor는 함수형이라 bind설정 X
    }

    addNumber(event) {
        
        //this.state.number = this.state.number + 1; - "이전"의 DOM 값을 바꾼거기 때문에 비교조차가 안되서 밑에 재렌더링이 안됨.(console 렌더실행이 안됨)
        this.setState({ //setState를 사용해야 이전, 이후 dom이 "비교가"되서 바뀌어 있는 값이 존재하면 바뀐 값으로 바꿀 수 있음.
            ...this.state, //무조건 복사하는게 먼저 온 다음 밑에 바꿔줄 값을 지정해준다.
            number: getRandomcount()
            
        });
    }


    // addNumber = (event) => {
        
    //     this.setState({
    //         ...this.state, //무조건 복사하는게 먼저 온 다음 밑에 바꿔줄 값을 지정해준다.
    //         number: this.state.number + 1
    //     });
    // };

    

    changeColor = (event) => {
        
        this.setState({
            ...this.state,
            //color: this.state.color = getRandomColor()
            color: getRandomColor()
        });
    };

    render(){
        console.log("렌더 실행");
        console.log(this.state.color);
        return(
            <div className="card">
                  <div className="card-header">
                  ComAClass
                  </div>
                  <div className="card-body">
                      <h3 style={{color:this.state.color}}>{this.state.number}</h3>
                      <button className="btn btn-info btm-sm mr-2" onClick={this.addNumber}>숫자 증가</button>
                      <button className="btn btn-info btm-sm mr-2" onClick={this.changeColor}>색깔 변경</button>
                  </div>
            </div>
        );
    }
}

export default ComA;