import { useState, useMemo, useCallback } from "react";
import BoardListItem from "./BoardListItem";
import style from "./style.module.css";
import { AutoSizer, List } from "react-virtualized";

function getBoards() {
    const boards = [];
    for(var i=10000; i>=1; i--){
        boards.push({bno:i, btitle:"제목"+i})
    }
    return boards;
}


function BoardList(props) { 
    console.log("BoardList 실행");
    
    const [btitle, setBtitle] = useState("");
    const [boards, setBoards] = useState(getBoards);
    const [bno, setBno] = useState(10001);


   

    const getLength = useMemo(() => {   
        console.log("getLength() 실행");
        return boards.length;
    },[boards]);


    const handleBtitleChange = useCallback((event) => { 
        setBtitle(event.target.value);                  
    }, []);

    const addBoard = useCallback((argBno, argBtitle) => {  //상태를 안 썻기 때문에 "정적"인 함수임 Exam03은 Setter의 콜백함수를 사용하는 방법임

        const newBoard = {bno:argBno, btitle: argBtitle};
        setBoards(prevBoards => { //prevBoards - 변경하는 "방법"만 제시
           const newBoards = prevBoards.concat(newBoard);
           newBoards.sort((a,b) => {return b.bno - a.bno});
           return newBoards;
        });
           
        setBno(prevbno => prevbno + 1); //bno를 쓴게 아니라 "방법"만 제시.
        setBtitle("");

    }, []);//첫 마운트 할 때만 선언 됨. Exam02의 addBoard보다 더 성능 효과, Exam02에 추가 할때 입력창에 aaaaa를 입력할때 a하나하나마다 재선언이 되지만, 이거는 첫 마운트때만 선언이 됨.
            //성능효과일뿐 굳이 성능효과 할 필요 없음

    const changeBoard = useCallback((bno) => {
        
        setBoards(prevBoards => {
            const newBoards = prevBoards.map(board => {
                if(board.bno === bno) {
                    const newBoard = {
                        ...board,
                        btitle: board.btitle + "(변경)"
                    };
                    return newBoard;
                }
                else{
                    return board;
                }
            });
            return newBoards;
        });
    }, []);

    const removeBoard = useCallback((bno) => {
       
        setBoards(prevBoards => {
            const newBoard = prevBoards.filter(board => board.bno !== bno);
            return newBoard;
        });
    }, []);   
    

    const rowRenderer = ({index, key, style}) => {  //하나의 행(ListItem)을 만들어주는 함수 - Renderer란 행의 UI를 만들어준다
        //무조건 태그 하나를 감싼 다음 그 태그에 key와 style을 사용 할 수 있다.
        return (
            <div key={key} style={style}>
            <BoardListItem board={boards[index]} changeBoard={changeBoard} removeBoard={removeBoard}/>
            </div>
        );
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
                <button className="btn btn-info btn-sm ml-3" onClick={() => addBoard(bno, btitle)}>추가</button>
                </div>
                </div>
                <div className="d-flex bg-info">
                    <span className="border" style={{width:"80px"}}>번호</span>
                    <span className="border flex-fill">제목</span>
                </div>


                {/* <div className={style.list}>
                {boards.map(board => {
                    return (
                      <BoardListItem key={board.bno} board={board} changeBoard={changeBoard} removeBoard={removeBoard}/>
                    );
                })}
                </div> */}

                {/* AutoSizer는 부모 속성의 너비와 높이를 자식 컴포넌트로 가져오는 역할 */}
                {/* disableHeight는 부모의 높이를 주지 않는다는 얘기 */}
                <AutoSizer disableHeight> 
                    {({width, height}) => {
                        return(
                        <List width={width} height={300}
                        list={boards}
                        rowCount={boards.length}
                        rowHeight={40}
                        rowRenderer={rowRenderer} //10000번을 실행 함.
                        overscanRowCount={5}/> //스크롤 할 수 있는 상황이 있기 때문에(사용자가 스크롤을 조금이라도 올리거나, 내릴 때 위,밑에 게시물을 봐야 하기 때문에 "미리" 렌더링을 위, 아래 5개 해놓는다는 얘기)
                        );
                    }}
                </AutoSizer>

            </div>
        </div>


        </>
    );
}

export default BoardList;