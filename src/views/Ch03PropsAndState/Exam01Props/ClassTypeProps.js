import React from "react";
import PropTypes from "prop-types";
class ClassTypeProps extends React.Component {
    

    render(){
        const {name, version, children} = this.props; //클래스 형으로 선언 할 때 변수마다 this를 붙여야하는데, 구조분해 방식으로 하면 this 안 붙이고 가능
                                                      //가독성이 떨어질 수도 있으니 그냥 하던대로 해도 됨
        return(
            <div className="card">
                  <div className="card-header">
                     ClassTypeProps
                  </div>
                  <div className="card-body">
                  <div> name: {name} </div>
                    <div> version: {version} </div>
                    <div> {children} </div>
                  </div>
            </div>
        );
    }
}
//default 속성 값 설정(index.js에서 version을 안 넘겨줌.)
ClassTypeProps.defaultProps = {
    //name: "React",
    version: 17
};

//타입과 필수 설정
ClassTypeProps.propTypes = {
    name: PropTypes.string.isRequired,  //반드시 name은 디폴트값지정을 하면 안되고 입력(제공 해야 함.)
    version: PropTypes.number           //필수가 아니여서 기본 값 제공해주는게 좋음
};
export default ClassTypeProps;