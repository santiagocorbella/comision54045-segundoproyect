import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
const Navbar = () => {
   return (
    <header style ={{display: 'flex', justifyContent: 'space-between'}}>
        <h1>¡¡¡ QUE DULZURA !!!</h1>
         <nav>
            <Link to='/category/torta'>Tortas</Link>
            <Link to='/category/bombones'>Bombones</Link>
            <Link to='/category/facturas'>Facturas</Link>
         </nav>
         <CartWidget/>
     </header>
   )     
 }

export default Navbar   






/*import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
    console.log(classes)
    return (
        <header className={classes.principalHeader}>
         <h1 style={{color: 'white',fontSize: 50, textAlign :'center'}}>¡¡¡QUE DULZURA!!!</h1>
         <nav>
            <a style={{color:'black',fontSize:25}}>Tortas-</a>
            <a style={{color:'black',fontSize:25}}>Facturas-</a>
            <a style={{color:'black',fontSize:25}}>Bombones-</a>
         </nav>
         <CartWidget />
        </header>

    )
}    
export default Navbar 
*/   