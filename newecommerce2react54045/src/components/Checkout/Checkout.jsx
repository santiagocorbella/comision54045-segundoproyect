import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const { cart, total, clearCart }= useContext(CartContext)//Carrito , total de la compra y limpiar carrito 
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const createOrder = async () => {
      try {
        setLoading(true)
    const objOrder = {
      buyer: form,
      items: cart, 
      total,
      date: Timestamp.fromDate(new Date())  
    };
    console.log('Order Created:', objOrder);

    const batch = writeBatch(db)
    const outOfStock = []
    const ids = cart.map(prod => prod.id)

    const productsCollection = query(collection(db, 'products'),where(documentId(), 'in', ids))
    const querySnapshot = await getDocs(productsCollection)
    const { docs } = querySnapshot

    docs.forEach(doc => {
      const data = doc.data()
      const stockDb = data.stock

      const productAddedToCart = cart.find(prod => prod.id === doc.id)
      const prodQuantity = productAddedToCart.quantity
    
      if(stockDb >= prodQuantity) {
        batch.update(doc.ref, { stock: stockDb - prodQuantity })
        } else {
          outOfStock.push({ id: doc.id, ...data})
        }
    })          
  
if(outOfStock.length === 0) {
  batch.commit()

  const orderCollection = collection(db, 'orders')
  const { id } = await addDoc(orderCollection, objOrder)
  
  clearCart()
  setOrderId(id)
 } else {
   console.error('hay productos que no tienen stock disponible')
 }
} catch (error) {
console.error('Hubo un error en la generacion de la orden')
} finally {
setLoading(false)
}
}

if(loading) {
return <h1 style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}>Su orden esta siendo generada...</h1>
}

if(orderId) {
return <h1 style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}>El id de su orden es: {orderId}</h1>
}

  return (
    <div style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}>
      <h1 style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}} >Checkout</h1>
      
      <form style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={handleInputChange} 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={handleInputChange} 
          />
        </label>
        <br />
        <label>
          Phone:
          <input 
            type="tel" 
            name="phone" 
            value={form.phone} 
            onChange={handleInputChange} 
          />
        </label>
      </form>
      
      <button onClick={createOrder}>Generar orden de compras</button>
    </div>
  );
};




export default Checkout 
  