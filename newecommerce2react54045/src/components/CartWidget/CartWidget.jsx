import {useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from '../../assets/logo.webp'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}>
            <img src={cart} style={{width:50}}/>
            { totalQuantity }
            
        </Link>
    )
}

export default CartWidget