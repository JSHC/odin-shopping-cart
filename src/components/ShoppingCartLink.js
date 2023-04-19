import { Link } from "react-router-dom"
import '../styles/ShoppingCartLink.css';
import { FaShoppingCart } from 'react-icons/fa'

const ShoppingCartLink = (props) => {
    return (
        <div className="shopping-cart-link-container">
            <div className="cart-items-number">{props.cartItemsNumber || 0}</div>
            <Link to='/shopping-cart'><FaShoppingCart /></Link>
        </div>
    )
}

export default ShoppingCartLink;