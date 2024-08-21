import { useEffect, useRef } from "react"

const ButtonDos = () => {
    const buttonRef = useRef()

   // useEffect(() => {
        //console.log(buttonRef)
      //const boton = buttonRef.current

      //const handleClick = () => console.log('hice click')

      //boton.addEventListener('click', handleClick)
      // }

    //}, [])

    console.log(buttonRef)
      return ( 
        <button ref={buttonRef} onClick={(e) => console.log('hice click:', e)}>boton</button>    
      )
  }
  
  export default ButtonDos 
        


   