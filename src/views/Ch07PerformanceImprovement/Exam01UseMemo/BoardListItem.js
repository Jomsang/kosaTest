function BoardListItem(props) {
    return(
        <div key={props.board.bno} className="d-flex align-items-center justify-content-between border-bottom">
                            <div className="d-flex">
                                <span style={{width:"80px"}}>{props.board.bno}</span>
                                <span>{props.board.btitle}</span>
                            </div>
                            <div>
                                <button className="btn btn-outline-primary btn-sm mr-1" onClick={() => props.changeBoard(props.board.bno)}>변경</button>
                                <button className="btn btn-outline-danger btn-sm" onClick={() => props.removeBoard(props.board.bno)}>삭제</button>
                            </div>
        </div>
    );
}

export default BoardListItem;