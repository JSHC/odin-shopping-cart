import { Link } from "react-router-dom"
import '../styles/ShoppingCartLink.css';

const ShoppingCartLink = (props) => {
    return (
        <div className="shopping-cart-link">
            <div className="cart-items-number">0</div>
            <Link to='/shopping-cart'><div></div></Link>
        </div>
    )
}

export default ShoppingCartLink;