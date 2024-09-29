import {useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
        .then(queryDocumentSnapshot => {
            const data = queryDocumentSnapshot.data()
            const productAdapted = { id: queryDocumentSnapshot.id, ...data}

            setProduct(productAdapted)
        })  
        .catch()
        
    }, [itemId])
    
    return (
       <div style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}> 
        <main>
            <h1 style={{color:'white'}}>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </main>
       </div> 
    )
}

export default ItemDetailContainer