import { useState } from "react";


function getBoardList() {
    console.log("getBoardList() 호출"); //함수로 밑에 useState로 줄 경우 리랜더링 할 때마다 계속 호출해서 성능저하 유발
    return (
        [
            { bno: 1, btitle: "제목1", bcontent: "내용1" },
            { bno: 2, btitle: "제목2", bcontent: "내용2" },
            { bno: 3, btitle: "제목3", bcontent: "내용3" },
          ]
    );
}

function Exam04StateInitFun() { //ppt 60 한거임

    // const [boardList, setBoardList] = useState(getBoardList()); 
    const [boardList, setBoardList] = useState(getBoardList);// ★ 함수로 초기값을 나타내려 할 때 ()를 빼야 최초 실행때만 한번만 나타내게 하고, 리랜더링 해도 호출 안함
    //const [boardList, setBoardList] = useState(() => getBoardList()); 이렇게 해도 됨.
    const [newBno, setNewBno] = useState(4);
    const addBoard = (event) => {
        setBoardList(boardList.concat({
            bno: newBno,
            btitle: "제목" + newBno,
            bcontent: "내용" + newBno
        }));
        setNewBno(newBno + 1);
    }

    return(
        <>
      <div className="card">
      <div className="card-header">
      Exam04StateInitFun
      </div>
      <div className="card-body">
        <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>bno</th>
              <th>btitle</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map(board=>(
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td>{board.btitle}</td>
                <td>{board.bcontent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


        </>
    );
}

export default Exam04StateInitFun;