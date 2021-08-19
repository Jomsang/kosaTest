function reducer(prevstate, action) {   //상태를 변경하는 함수
    if(action.type === "INCREMENT"){
        return {
            number: prevstate.number + 1
        };
    }
    else if(action.type === "DECREMENT"){
        return {
            number: prevstate.number - 1
        };
    }
    else{
        return null;
    }
    
}

export default reducer;