import { useState, useMemo, useCallback } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
    const boards = [];
    for(var i=5; i>=1; i--){
        boards.push({bno:i, btitle:"제목"+i})
    }
    return boards;
}


function BoardList(props) { 
    console.log("BoardList 실행");
    
    const [btitle, setBtitle] = useState("");
    const [boards, setBoards] = useState(getBoards);
    const [bno, setBno] = useState(6);


    const getLength = useMemo(() => {   
        console.log("getLength() 실행");
        return boards.length;
    },[boards]);


    const handleBtitleChange = useCallback((event) => { //빈 배열로 넣으면 맨 처음 마운트 될 때만 handleBtitleChange함수가 선언되고, 다음부턴 전혀 재선언이 안됨.
        // console.log("handleBtitleChange() 실행");
        setBtitle(event.target.value);                  //prop이 사용된것도 없고, 위에 state를 사용한것도 없기 때문에 빈 배열로 조건을 줌.
    }, []);

    const addBoard = useCallback((event) => {
        const newBoard = {bno, btitle};
        const newBords = boards.concat(newBoard);
        newBords.sort((a,b) => {return b.bno - a.bno});//내림차순
        setBoards(newBords);
        setBno(bno + 1);
        setBtitle("");
    }, [bno, btitle, boards]);//bno, btitle, boards 이 3개의 state가 변화가 있을 때만 재선언

    const changeBoard = useCallback((bno) => {
        const newBoards = boards.map(board => {
            if(board.bno === bno) {
                const newBoard = {
                    ...board,
                    btitle: board.btitle + "(변경)"
                };
                return newBoard;//해당 bno board는 "(변경)"이라는 문자를 붙여서 리턴 함
            }
            else{
                return board;//bno가 아닌 board는 그냥 리턴하고,
            }
        });
        setBoards(newBoards);
    }, [boards]);//bno는 매개변수여서 넣으면 안됨, boards만 변경되었을때 changeBoard 재선언

    const removeBoard = useCallback((bno) => {
        const newBoard = boards.filter(board => board.bno !== bno);
        setBoards(newBoard);
    }, [boards]);   //boards만 변경되었을때 removeBoard 재선언
    
    return(
        <>
        <div className="card">
            <div className="card-header">
            BoardList
            </div>
            <div className="card-body">
                <div>
                <span className="mr-2">게시물 수:</span> 
                {/* <span className="text-danger">{getLength()}</span> */}
                <span className="text-danger">{getLength}</span> 
                

                <div className="d-flex align-items-center mt-2 mb-3">
                <span className="mr-2">제목:</span>
                <input type="text" value={btitle} onChange={handleBtitleChange}/>
                <button className="btn btn-info btn-sm ml-3" onClick={addBoard}>추가</button>
                </div>
                </div>
                <div className="d-flex bg-info">
                    <span className="border" style={{width:"80px"}}>번호</span>
                    <span className="border flex-fill">제목</span>
                </div>

                {boards.map(board => {
                    return (
                      <BoardListItem key={board.bno} board={board} changeBoard={changeBoard} removeBoard={removeBoard}/>
                    );
                })}


            </div>
        </div>


        </>
    );
}

export default BoardList;