import {useState,useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import {useParams } from "react-router-dom"
import { useNotification } from "../../notification/hooks/useNotification"
import { getDocs, collection, query, where } from 'firebase/firestore'
import {db} from "../../services/firebase/firebaseConfig"
const ItemListContainer = ({ greeting}) => {

  const[products, setProducts] = useState([])
  const[render, setRender] = useState(false)
  const [loading, setLoading] = useState(true)

  const {categoryId } = useParams()

  const { showNotification } = useNotification()

  useEffect(() => {
    setTimeout(() => {
    setRender(prev => !prev)
    setLoading(render)
     } , 2000)  
}, [])

  useEffect(() => {
    
    const productsCollection = categoryId ? (
       query(collection(db ,'products'), where('category', '==',categoryId))
    ) : ( 
       collection(db, 'products')
    )
       
    getDocs(productsCollection)
       .then(querySnapshot => {
        const productsAdapted = querySnapshot.docs.map(doc => {
          const data = doc.data()
          
          return {id: doc.id, ...data}
       })

        setProducts(productsAdapted)
        
      }) 
       .catch(error => {
        showNotification('error', 'Hubo un error cargando los productos')
  })
    
    }, [categoryId])

    if (loading) {
      return <h1 style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}>Cargando listado de productos...</h1>
    }

     return (
      
      <main style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
      </main>
     
     )
   }
   
export default ItemListContainer  

