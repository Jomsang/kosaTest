import React from "react";
import ColorContext from "./ColorContext";
import ComBFun from "./ComBFun";
class ComAClass extends React.Component{
    //정적 속성(클래스 컴포넌트에서 ColorContext.js를 사용하고 싶으면)
    static contextType = ColorContext;


    constructor(props){
        super(props);
        this.state = {};
    }

    handleChange =(event) => {
        this.context.setColor("red");
    };

    render() {
        return (
            <div className="card">
            <div className="card-header">
            ComAClass 
            </div>
            
            <div className="card-body">
            <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
                {/* this.context는 위에 선언한 contextType을 자동 참조 함*/}
                <div style={{backgroundColor: this.context.color }}>
                    내용
                </div>

                <ComBFun/>

            </div>
          </div>
        );
    }
}

export default ComAClass ;