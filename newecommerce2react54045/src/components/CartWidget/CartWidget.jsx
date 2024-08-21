import {useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from '../../assets/logo.webp'


const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <button>
            <img src={cart} style={{width:50}}/>
            { totalQuantity }
            
        </button>
    )
}

export default CartWidget