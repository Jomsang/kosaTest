import { useReducer, useState } from "react";

function reducer(prevBoards, action) {
  if (action.type === "ADD") {  //{type: "ADD", board:{...}} - ADD이니까 타입이랑 추가 할 데이터가 들어와야 함!
    const newBoards = prevBoards.concat(action.board);
    return newBoards;
  } 

  else if (action.type === "DELETE") { //{type: "DELETE", bno:1} -DELETE이니까 타입이랑 추가할 board의 bno를 받아야 삭제 가능
    const newBoards = prevBoards.filter((board) => {
      return board.bno !== action.bno;
    });
    return newBoards;
  } 

  else if (action.type === "UPDATE") {
    const newBoards = prevBoards.map((board) => { //{type: "UPDATE", board:{...}} -UPDATE이니까 타입이랑 수정할 board를 받아야 가능
      if (board.bno === action.board.bno) {
        //console.log(action.board);
        return action.board;
      }
      //console.log(board)
      return board; //비동기 처리이기 때문에 위에 수정할 bno의 board를 리턴 해주고, 변하지않은 원래의 board도 같이 리턴해줘야 함.
    });
    console.log(newBoards);
    return newBoards;
  } 

  else {
    return null;
  }
}


function ComBFun(props) {
  const [boards, dispatch] = useReducer(reducer, [
    { bno: 1, btitle: "제목1", bcontent: "내용1" },
    { bno: 2, btitle: "제목2", bcontent: "내용2" },
    { bno: 3, btitle: "제목3", bcontent: "내용3" },
  ]);
  const [newBno, setNewBno] = useState(4);
  const [newBoard, setNewBoard] = useState({
    btitle: "",
    bcontent: "",
  });
  const [updateBoard, setUpdateBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: "",
  });

  const changeNewBoard = (event) => {
    setNewBoard({
      ...newBoard,
      [event.target.name]: event.target.value,
    });
  };

  const addBoard = (event) => {   //위 changeNewBoard에서 입력한 btitle, bcontent가 넘어 옴
    const board = { ...newBoard, bno: newBno };
    dispatch({ type: "ADD", board });
    setNewBno(newBno + 1);
    setNewBoard({               //추가하고나서 input값을 초기화 하기 위해
      btitle: "",
      bcontent: "",
    });
  };

  const selectBoard = (bno) => {
    const selectedBoard = boards.find(board => {
      return board.bno === bno;
    });
    setUpdateBoard({...selectedBoard});
  };

  const removeBoard = (bno) => {
    dispatch({ type: "DELETE", bno });
  };

  const changeUpdateBoard = (event) => {
    setUpdateBoard({
      ...updateBoard,
      [event.target.name]: event.target.value,  //btitle만 수정 할 수도 있기 때문에 이렇게 해야 맞음.
    });
  };
  const handleUpdate = (event) => {
    dispatch({type:"UPDATE", board: updateBoard});
    setUpdateBoard({
      bno: "",
      btitle: "",
      bcontent: "",
    });
  };

  return (
    <div className="card">
      <div className="card-header">Component: ComBFun</div>
      <div className="card-body">
        <div className="alert alert-primary">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "100px" }}>btitle</td>
                <td>
                  <input type="text" name="btitle" style={{ width: "100%" }} value={newBoard.btitle} onChange={changeNewBoard} />
                </td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td>
                  <input type="text" name="bcontent" style={{ width: "100%" }} value={newBoard.bcontent} onChange={changeNewBoard} />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={addBoard}>
            추가
          </button>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>bno</th>
                <th>btitle</th>
                <th>bcontent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => {
                return (
                  <tr key={board.bno}>
                    <td>{board.bno}</td>
                    <td>{board.btitle}</td>
                    <td>{board.bcontent}</td>
                    <td style={{ width: "150px" }}>
                      <button className="btn btn-info btn-sm mr-1" onClick={(event) => { 
                        selectBoard(board.bno);
                        }}
                      >선택</button>
                      <button className="btn btn-danger btn-sm" onClick={(event) => {
                          removeBoard(board.bno);
                        }}
                      >삭제</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="alert alert-primary">
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ width: "100px" }}>bno</td>
                <td>
                  <input type="text" name="bno" style={{ width: "100%" }} value={updateBoard.bno} readOnly  />
                </td>
              </tr>
              <tr>
                <td style={{ width: "100px" }}>btitle</td>
                <td>
                  <input type="text" name="btitle" style={{ width: "100%" }} value={updateBoard.btitle} onChange={changeUpdateBoard} />
                </td>
              </tr>
              <tr>
                <td>bcontent</td>
                <td>
                  <input type="text" name="bcontent" style={{ width: "100%" }} value={updateBoard.bcontent} onChange={changeUpdateBoard}  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-success btn-sm" onClick={handleUpdate}>수정</button>
        </div>
      </div>
    </div>
  );
}
export default ComBFun;