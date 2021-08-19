import { useState, useMemo } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
    const boards = [];
    for(var i=5; i>=1; i--){
        boards.push({bno:i, btitle:"제목"+i})
    }
    return boards;
}


function BoardList(props) { //재연산 방지
    //console.log("BoardList 실행");
    
    const [btitle, setBtitle] = useState("");
    const [boards, setBoards] = useState(getBoards);
    const [bno, setBno] = useState(6);


    /*const getLength = (event) => {
        console.log("getLength() 실행");//BoardList()가 계속 재실행되서 쓸데 없이 이 console이 나타남(맨 처음 한 번만 나타나도 되는데..)
        return boards.length;
    };*/

    const getLength = useMemo(() => {   //board가 변경 될 때만 게시물의 수를 읽는 getLength()를 실행 ★ 재연산 방지
        console.log("getLength() 실행");
        return boards.length;
    },[boards]);


    const handleBtitleChange = (event) => {
        setBtitle(event.target.value);
    };

    const addBoard = (event) => {
        const newBoard = {bno, btitle};
        const newBords = boards.concat(newBoard);
        newBords.sort((a,b) => {return b.bno - a.bno});//내림차순
        setBoards(newBords);
        setBno(bno + 1);
        setBtitle("");
    };

    const changeBoard = (bno) => {
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
    };

    const removeBoard = (bno) => {
        const newBoard = boards.filter(board => board.bno !== bno);
        setBoards(newBoard);
    };
    
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