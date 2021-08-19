import React from "react";
class ClassType extends React.Component{

    // state = {           - 이렇게 state를 초기화 시켜도 되지만 원래 쓰는 것처럼 사용하기
    //     startNum: 0,
    //     number: 0
    // };
    constructor(props) { //부모 컴포넌트에서 받은 state, 밑에서 업데이트가 되도 생성자로 생성된 객체 하나로만 가지고 지지고 볶게 됨.
        super(props);
        this.state = {
            startNum: 0,
            number: 0
        };
        console.log("생성자 실행");//최초 마운트 될때만 실행
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleIncrement(event) {
        this.setState({
            ...this.state,
            number : this.state.number + 1
        })
    }


    //처음 props만 부모 컴포넌트가 생성자에 보내준거로 사용하고 그 이후 렌더링이되면 생성자가 아니라 부모에서 직접 이 getDerivedStateFromProps메소드가 받아서 state를 갱신 함.
    static getDerivedStateFromProps(props, prevState) { //prop으로 전달 받은 값을 state로 쓸건지, 부모의 prop이 바뀔때 마다 계속 실행이 됨. prevState는 위에 초기화한 this.state임
        console.log("getDerivedStateFromProps() 실행");
        console.log("props", props); //부모에서 넘어온 값
        console.log("prevState", prevState);
        if(prevState.startNum !== props.startNum) {//새로 갱신되는 props의 startNum값과 이전 상태의 prevState.startNum 값이 다르면 갱신하고, 변화 없으면 굳이 실행 안함.
            return {                    //props가 갱신될 때 상태값도 같이 갱신되도록 새로운 상태 리턴
                startNum: props.startNum,
                number: props.startNum
                
            };
        }
        else{
            return null
        }
       
    }

    shouldComponentUpdate(nextProps, nextState){    //업데이트를 하느냐 안 하느냐
        console.group("shouldComponentUpdate() 실행");
        console.log("nextProps: ", nextProps);
        console.log("nextState: ", nextState);
        console.groupEnd();
        if(nextState.number%2 ===0){    //짝수일 때만 렌더링이 됨.
            return true;   
        }
        else{
            return false;   
        }
                                 
    }

    render() {
        console.log("render() 실행");
        return (
            <div className="card">
            <div className="card-header">
            ClassType 
            </div>
            <div className="card-body">
                <div>
                number: {this.state.number}
                </div>
                <button className="btn btn-info btn-sm mt-2" onClick={this.handleIncrement}>증가</button>
            </div>
          </div>
        );
    }

    componentDidUpdate() {  //업데이트 완료 후 실행 즉 shouldComponentUpdate로 인해 렌더가 실행이 되면 이 함수가 실행 됨.
        console.log("componentDidUpdate() 실행");
    }

    componentDidMount() {
        console.log("componentDidMount() 실행");//마운트일때 실행됨(현재 페이지를 나타낼때)
    }

    componentWillUnmount() {
        console.log("componentWillUnmount() 실행");//언마운트일때 실행됨(다른 페이지로 갈때)
    }
}

export default ClassType ;