import React from "react";
import { connect } from "react-redux";
import { createSetColorAction } from "redux/color-reducer";
class ComAClass extends React.Component{

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {       
        this.props.setColor("red");     
    }

    render() {
        return (
            <div className="card">
            <div className="card-header">
            ComAClass 
            </div>
            <div className="card-body">
            <button className="btn btn-info btn-sm mb-3" onClick={this.handleChange}>색깔 변경</button>
                {/* this.context는 위에 선언한 contextType을 자동 참조 함*/}
                <div style={{backgroundColor: this.props.color }}>
                    내용
                </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({ //return 방법 1
    color: state.colorReducer.color //현재 store.state의 color 색을 가져 옴
});

// const mapStateToProps = (state) => { //return 방법 2
//     return {
//     color: state.colorReducer.color
//     }
// };

const mapDispatchToProps = (dispatch) => {  
    return {
        setColor: (color) => dispatch(createSetColorAction(color))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ComAClass); //connect가 return 하는게 함수이기 때문에 (ComAClass); 를 붙여야 함. 즉 ComAClass에게 props를 통해 redux(color-reducer)를 상태를 제공해줌.
                                                                        //store가 가지고 있는 상태와 컴포넌트와 연결을 시켜 줌 (store의 state와 dispatch가 위 생성자 props를 통해 들어옴)