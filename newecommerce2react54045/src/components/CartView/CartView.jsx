import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
    const { cart, removeItem } = useContext(CartContext)
    
    return (
        <div style={{ background: 'linear-gradient(to right, hsl(60, 93%, 50%), #f68e08, #f84b06, #f70606, #de06c5)'}}>
            <h1>Cart</h1>
            <section>
            {
              cart.map(prod => {
                return (
                    <article key={prod.id}>
                        <h2>{prod.name}</h2>
                        <button onClick={() =>removeItem(prod.id)}>Eliminar</button>
                    </article>
                )
            })           
          }
          </section>
          <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartView