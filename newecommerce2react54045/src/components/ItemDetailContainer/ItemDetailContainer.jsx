import {useState, useEffect } from "react"
//import {getProductById} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams } from "react-router-dom"
import { getDoc, doc, QueryDocumentSnapshot } from "firebase/firestore"
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
        //getProductById(itemId)
        //.then(result => {
            //setProduct(result)
        //})
    }, [itemId])
    
    return (
        <main>
            <h1 style={{color:'white'}}>Detalle de producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer