import { deleteBoard, readBoard } from "apis/boards";
import qs from "qs";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
function BoardRead(props) {
    const bno = parseInt(props.match.params.bno);
    const queryString = qs.parse(props.location.search, {ignoreQueryPrefix:true});
    const pageNo = parseInt(queryString.pageNo);

    //비동기 호출 ★ props를 통해 bno를 받앗는데, BoardRead함수 자체가 비동기식으로 되기 때문에, bno를 받기도 전에 board를 출력해서 아무것도 안 뜨는 현상
    //const board = readBoard(bno);

    /*let board = {};
    const work = async () => {
        board = await readBoard(bno);
    };
    work();*/
    //즉 props를 통해 정보가 넘어오는 동시에 실행이 되기 때문에, 데이터 받고 나서 실행되게 지연을 시켜야하는 상황에서도 "state"(상태)처럼 선언 해야 함.

    const [board, setBoard] = useState({});

    useEffect(() => {                  //★ useEffect로 바로 async 줄 수 없기 때문에 work 상수로 사용해서 함.
        const work = async () => {
            try{
                const response = await readBoard(bno);
                setBoard(response.data);
            }catch(error){
                console.log(error);
            }
        };
        work();
    }, []); //bno를 안 넣어야 하는데, 경고문 떠서 넣음. 어차피 bno가 수정 될 일이 없음

    const history = useHistory();
    const handleRemove = async (event) => {
        try{
            await deleteBoard(bno);
            props.history.goBack();
        }catch(error){
            console.log(error);
            //history.push() - 제작한 에러페이지를 보여주게 하기 위할 때 push 사용
        }
    };

    return(
        <div className="card">
        <div className="card-header">
          BoardRead
        </div>
        <div className="card-body">
          {board &&
            <>
              <div>
                <p>bno: {board.bno}</p>
                <p>btitle: {board.btitle}</p>
                <p>bcontent: {board.bcontent}</p>
                <p>bwriter: {board.bwriter}</p>
                <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
                <p>bhitcount: {board.bhitcount}</p>
                <p>battachoname: {board.battachoname}</p>
                <p>battachsname: {board.battachsname}</p>
                <p>battachtype: {board.battachtype}</p>
              </div>
              <div>
                <Link to={"/ch09/exam03?pageNo=" + pageNo} className="btn btn-info btn-sm mr-2">목록</Link>
                <Link to={`/ch09/exam03/${board.bno}/updateForm`} className="btn btn-info btn-sm mr-2">수정</Link>
                <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>삭제</button>
              </div>
            </>
          }
        </div>
      </div>

    );
}

export default BoardRead;