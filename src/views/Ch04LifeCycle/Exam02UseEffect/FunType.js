import { useEffect, useState } from "react";

function FunType(props) { //업데이트마다 재실행

    console.log("FunType() 실행");

    const [state, setState] = useState({//처음 마운트 될때(맨 처음 실행)만 초기화 함
        startNun: 0,
        number: 0
    });

    // setState({                      - 이렇게 상태를 업데이트하면 리렌더링 무한루프 오류가 됨.
    //     startNum: props.startNum,
    //     number: props.startNum
    // })

    
    useEffect(() => {   //함수형은 이 하나뿐
        console.log("마운트, 업데이트 후에 실행");
        // setState({                    
        //     startNum: props.startNum,
        //     number: props.startNum
        // })
        
        return(() => {  //거의 사용 안함
            console.log("업데이트 전에 실행, 언마운트시 실행");
        });
    });

    useEffect(() => {
        console.log("마운트 실행");
        return(() => {
            console.log("언마운트 실행1");    
        })
    }, [])  //[]이 2번째 매개로 들어가면 useEffect()가 마운트, 언마운트 역할만 갖게 함. 

    useEffect(() => {   //prop이 변화 할 때마다 실행(상태를 업데이트 하려면 부모의 상태가 바뀌고 받은 prop의 변화가 있을 때 업데이트 해야 함)
        console.log("마운트/props 변경이 될때 실행");
        setState({                    
                 startNum: props.startNum,
                 number: props.startNum
             })
        return(() => {
            console.log("언마운트 실행2");    
        })
    }, [props]);

    useEffect(() => {   //state가 변화 할 때마다 실행
        console.log("마운트/state 변경이 될때 실행");
        return(() => {
            console.log("언마운트 실행");    
        })
    }, [state]);

    // useEffect(() => {   //state, props중 하나라도 변화 할 때마다 실행
    //     console.log("마운트/state 변경이 될때 실행");
    //     return(() => {
    //         console.log("언마운트 실행");    
    //     })
    // }, [props,state]);


    

    const handleIncrement = (event) => {
        setState({
            ...state,
            number : state.number + 1
        })
    };




    return(
        <>
           <div className="card">
            <div className="card-header">
            FunType 
            </div>
            <div className="card-body">
                <div>
                number: {state.number}
                </div>
                <button className="btn btn-info btn-sm mt-2" onClick={handleIncrement}>증가</button>
            </div>
          </div>


        </>
    );
}

export default FunType;