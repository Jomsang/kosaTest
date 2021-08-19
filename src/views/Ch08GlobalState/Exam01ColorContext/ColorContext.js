import React, { useState } from "react";
const ColorContext = React.createContext({  // 컴포넌트가 아님(기본 데이터 및 기능)
    color: "yellow",
    setColor:() => {}   //정적으로 사용되기 때문에 굳이 변할 일이 없으니 함수로 선언만 해줌.
    
})

export function ColorContextProvider(props) {   //컴포넌트임
    const [color, setColor] = useState("yellow");
    const value = {
        color: color,
        setColor: setColor
    }
    return(
        <ColorContext.Provider value={value}>
            {props.children}
        </ColorContext.Provider>
    );
    
}

export default ColorContext;