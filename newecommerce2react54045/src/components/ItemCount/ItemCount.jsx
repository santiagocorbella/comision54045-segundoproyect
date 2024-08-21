import {useState} from "react"

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev -1)
        }
    }
    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)  
        }
    }
    
    return (
        <article>
            <h3>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

 export default ItemCount 
/*import { useState, useEffect } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.valorInicial)
    
    useEffect(() => {
        console.log('acción useEffect') 
        document.title = 'count: ' + count

        return () => {
            console.log('limpieza useEffect')
            document.title = 'vite + react'
        }    
    }, [count])

    console.log('render count')
    const decrement = () => {

        setCount(count => count - 1)
    }

    const increment = () => {
        //if(count < props.maximo) {
        setCount(count => count + 1)
       // }
} 

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Incrementar 1</button>
            <button onClick={increment}>Incrementar 2</button>
        </div>
    )
    
}

export default <ItemCount></ItemCount>*/

