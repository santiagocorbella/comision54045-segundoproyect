import './App.css'
import  Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationsService'
import CartView from './components/CartView/CartView'
import Checkout from './components/Checkout/Checkout'
//import FormWithValidationHOC from './components/FormWithValidationHOC/FormWithValidationHOC'
//import { useEffect } from 'react'
//import {addDoc, collection } from 'firebase/firestore'
//import { db } from './services/firebase/firebaseConfig'
//import ButtonDos from './components/ButtonDos/ButtonDos'

const App = () => {

//useEffect(() => {
  //const products = [
    //{ 
      //name: 'Selva Negra',
      //price: 2000,
      //category: 'torta selva negra',
      //img:'https://www.paulinacocina.net/wp-content/uploads/2022/04/selva-negra-receta-1-800x534.jpg',
      //stock: 5,
      //description:'Torta de chocolate , crema y cereza'
    //},
    //{
      //name: 'Marquise',
      //price: 1000,
      //category: 'torta marquise',
      //img:'https://truffle-assets.tastemadecontent.net/79143177-marquise-1920x1080-thumbnail.jpg',
      //stock: 30,
      //description:'Torta de chocolate con merengue'
    //},
    //{
     //name: 'Rogel',
     //price: 1300,
     //category: 'torta rogel',
     //img:'https://www.clarin.com/img/2020/08/27/PKMxPZps0_1200x630__1.jpg',
     //stock: 30,
     //description:'torta de dulce de leche y merengue italiano'
   //},
//]

//const productsCollection = collection(db, 'products')

//products.forEach(async prod => {
  //console.log('addDoc')
  //await addDoc(productsCollection, prod)
 //})
//}, [])
 
  return (
   <>
    <BrowserRouter>
     <NotificationProvider>
      <CartProvider>
       <Navbar/>
       <Routes>
        <Route path='/' element ={<ItemListContainer greeting={'¡Bienvenidos!'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'¡Productos de la categoria!'}/>}/>
        <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartView/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      {/*<ButtonDos/>*/}
     </CartProvider>
    </NotificationProvider>
   </BrowserRouter> 
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



