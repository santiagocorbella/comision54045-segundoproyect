import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"
//import { useEffect, useState } from 'react'
//import {collection, getDocs} from 'firebase/firestore'
//import { db } from '../../services/firebase/firebaseConfig'

const Navbar = () => {
    //const [categories, setCategories] = useState([])
    

    //useEffect(() => {
        //const categoriesCollection = collection(db, 'categories')

        //getDocs(categoriesCollection)
           //.then(querySnapshot => {
              //const categoriesAdapted = querySnapshot.docs.map(doc=> {
                //const data = doc.data()
                //return { id: doc.id, ...data}
              //})
              //setCategories(categoriesAdapted)  
      //})
       //.catch(error => {
        //console.error('error')
      //})     
    //}, [])

   return (
    <header>
         <CartWidget/>
        <h1 style={{color:'darkblue',display:'flex',flexDirection:'column'}}>¡¡¡ QUE DULZURA !!!</h1>
         <h2 style={{color:'blue',display:'flex',flexDirection:'column'}}>¡Venta de Tortas!</h2>
         <nav>
            {/*{
                categories.map(cat => {
                    return <link key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</link>
                })
              }
            */}        
            <Link className='btn btn-primary' to='/category/torta selva negra'>Selva Negra</Link>
            <Link className='btn btn-primary'to='/category/torta marquise'>Marquise</Link>
            <Link className='btn btn-primary'to='/category/torta rogel'>Rogel</Link>
         </nav>
        
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