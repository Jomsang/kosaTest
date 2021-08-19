import PropTypes from "prop-types";
function FunTypeProps(props) {
    const {name, version, children} = props;
    return(
        <div className="card">
              <div className="card-header">
              FunTypeProps
              </div>
              <div className="card-body">
                <div> name: {name} </div>
                <div> version: {version} </div>
                <div>{children} </div>
              </div>
        </div>
    );
}
//default 속성 값 설정(index.js에서 version을 안 넘겨줌.)
FunTypeProps.defaultProps = {
    name: "React",
    version: 17
};
FunTypeProps.propTypes = {
    name: PropTypes.string.isRequired,  //반드시 name은 디폴트값지정을 하면 안되고 입력(제공 해야 함.)
    version: PropTypes.number           //필수가 아니여서 기본 값 제공해주는게 좋음
}
export default FunTypeProps;