import { Link, useHistory } from "react-router-dom";
import { getBoard, deleteBoard } from "./data";
import qs from "qs";
function BoardRead(props) {
    console.log(props);
    const bno = parseInt(props.match.params.bno);
    const board = getBoard(bno);
    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
    const pageNo = parseInt(queryString.pageNo);

    const history = useHistory(); //Hook 종류 - 지금까지 쭉 사용된 URL이 담겨 있음.(URL 변경 효과)
    const handleRemove = (event) => {
        deleteBoard(bno);
        //자바스크립트 (React) 에서는 location href로는 안됨. 그래서 useHistory() 함수를 사용함.
        //history.push("/ch06?pageNo" + pageNo);// URL 변경
        history.goBack(); //뒤로가기(바로 이전의 페이지) (게시물 리스트로 감)
        
    };

    return(
        <div className="card">
        <div className="card-header">
          BoardRead
        </div>
        <div className="card-body">
          <div>
            <p>bno: {board.bno}</p>
            <p>btitle: {board.btitle}</p>
            <p>bcontent: {board.bcontent}</p>
            <p>bwriter: {board.bwriter}</p>
            <p>bdate: {board.bdate}</p>
            <p>bhitcount: {board.bhitcount}</p>
          </div>
          <div>
            <Link to={"/ch06?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
            <Link to={`/ch06/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
          </div>
        </div>
      </div>
    );
}

export default BoardRead;