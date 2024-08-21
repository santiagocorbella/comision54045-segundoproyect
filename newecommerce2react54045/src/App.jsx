import './App.css'
import  Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ButtonDos from './components/ButtonDos/ButtonDos'


const App = () => {
  
  return (
   <>
    <CartProvider>
     <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element ={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
       <Route path='/category/:categoryId' element={<ItemListContainer greeting={'¡Productos de la categoria!'}/>}/>
       <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
      <ButtonDos/>
    </BrowserRouter>
   </CartProvider>
  </>
 )
}
export default App  

//import Button from "./components/Button/Button"
//import ItemCount from "./components/ItemCount/ItemCount"
//import { useState } from "react"
//import ContadorDeVueltas from "./components/ContadorDeVueltas/ContadorDeVueltas"
//<Route path='/item' element={<ItemDetailContainer/>}/>
/*import MercadoLibre from "./components/MercadoLibre/MercadoLibre"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCountTwo from "./components/ItemCount/ItemCountTwo"
import FormWithValidationHOC from "./components/FormWithValidationHOC/FormWithValidationHOC"
import TaskFilterRenderProps from "./components/TasksFilterRenderProps/TaskFilterRenderProps"
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return(
   <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
      </Routes>
     <ItemCountTwo/>
     <MercadoLibre />
     <FormWithValidationHOC/>
     <TaskFilterRenderProps/>
     
    </BrowserRouter>
   </>
  )
}

export default App
/*const App = () => {
  const [mostrar, setMostrar] = useState(false)

  return (
    <>
    <button onClick={() => setMostrar(previo => !previo)}>ver/no ver</button>
    {mostrar ? <ItemCount valorInicial={1}/> : null }
    </>
  )
}  
*/

/*const App = () => {
  const [show, setShow] = useState(false)

  return (
    <>
     <ContadorDeVueltas/>
    </>
  )
}
 */ 



