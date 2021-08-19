import React from "react";
class ComBClassTypeEventHandling extends React.Component{
    constructor(props) {
        super(props);
        //method1을 실행시키기 위한 방법 1
        this.handleBtn1 = this.handleBtn1.bind(this);
        this.handleBtn2 = this.handleBtn2.bind(this);
    }
    method1(){
        console.log("method1() 실행");
    }

    //방법 1 메소드로 작성 할때는 bind를 꼭 선언해야 this.method1();를 실행 할 수 있음
    handleBtn1(event) {
        console.log("버튼 1이 클릭되었습니다.");
        console.log(event.target);
        console.log(event.type);
        this.method1();
    }
    handleBtn2(event, x, y) {
        console.log("버튼 2이 클릭되었습니다.");
        const result = x + y;
        console.log(result);
        console.log(event.target.name);
        console.log(event.type);
        this.method1();
    }




    //방법 2 화살표 함수로 작성(bind 할 필요가 없음.)
    handleBtn3 = (event) => {
        console.log("버튼 3이 클릭되었습니다.");
        console.log(event.target);
        console.log(event.type);
        this.method1();
    };

    handleBtn4 = (event) => {
        console.log("버튼 4이 클릭되었습니다.");
        console.log(event.target);
        console.log(event.type);
        this.method1();
    };




    render() {
        return (
            <div className="card">
            <div className="card-header">
            ComBClassTypeEventHandling 
            </div>
            <div className="card-body">
                <button name="btn1" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn1}>버튼 1</button>
                <button name="btn2" className="btn btn-info btn-sm mr-2" onClick={(event)=>{this.handleBtn2(event, 3, 5);}}>버튼 2</button>
                <button name="btn3" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn3}>버튼 3</button>
                <button name="btn4" className="btn btn-info btn-sm mr-2" onClick={this.handleBtn4}>버튼 4</button>
            </div>
          </div>
        );
    }
}

export default ComBClassTypeEventHandling;