import React, {useState} from 'react'

export default function Counter() {
    const [number,setNumber] = useState(0);
    const raiseBtn = () => {
        setNumber(number+1);
    }
     const downBtn = () => {
        if(number>0){
        setNumber(number-1);
        }
    }
     const resetBtn = () => {
        setNumber(0);
    }
    return (
        <div style={{disply: "flex",
                    justifyContent: "space-between",
                    fontFamily: "monospace",
                    fontSize: "30px",
                    fontWeight: "bold"

        }}>
            <h1>Counter</h1>
            <h1>{number}</h1>
            <button onClick={raiseBtn}>Raise</button>
            <button onClick={downBtn}>Down</button>

            <button onClick={resetBtn}>Reset</button>

        </div>
    )
}