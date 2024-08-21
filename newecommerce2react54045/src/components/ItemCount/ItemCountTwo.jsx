import {useState} from "react"
import {useCount} from "../../hooks/useCountTwo"



const ItemCountTwo = ({initialValue}) => {
    const {count, decrement, increment } = useCount(initialValue)
    const {count: count2, decrement: decrement2, increment: increment2 } = useCount(100)

    return(
        
        <div style={{ display:'flex', flexDirection:'column',alignItems:'center'}}>
            <div>
             <h1>Contadores</h1>
            </div>
            <h1>{count}</h1>
            <button onClick={decrement}>decrementar</button>
            <button onClick={increment}>incrementar</button>
            <h1>{count2}</h1>
            <button onClick={decrement2}>decrementar</button>
            <button onClick={increment2}>incrementar</button>
        </div>
    )
}

export default ItemCountTwo