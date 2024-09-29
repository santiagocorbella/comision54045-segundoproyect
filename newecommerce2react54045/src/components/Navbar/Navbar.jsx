import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {
    
  return (
    <header style={{ background:'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}} >
         <CartWidget/>
        <h1 style={{color:'darkblue',display:'flex',flexDirection:'column'}}>¡¡¡ QUE DULZURA !!!</h1>
         <h2 style={{color:'blue',display:'flex',flexDirection:'column'}}>¡Venta de Tortas!</h2>
         <nav>
            <Link className='btn btn-primary' to='/category/torta selva negra'>Selva Negra</Link>
            <Link className='btn btn-primary'to='/category/torta marquise'>Marquise</Link>
            <Link className='btn btn-primary'to='/category/torta rogel'>Rogel</Link>
         </nav>
        
     </header>
   )     
 }

export default Navbar   






