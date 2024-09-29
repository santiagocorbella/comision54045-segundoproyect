import { useRef } from "react"

const ButtonDos = () => {
    const buttonRef = useRef()

    console.log(buttonRef)
      return ( 
        <button ref={buttonRef} onClick={(e) => console.log('hice click:', e)}>boton</button>    
      )
  }
  
  export default ButtonDos 
        


   