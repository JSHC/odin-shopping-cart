import { Link } from "react-router-dom"

const ShoppingCartLink = (props) => {
    return (
        <div>
            <div className="cart-items-number">0</div>
            <Link to='/shopping-cart'><div></div></Link>
        </div>
    )
}

export default ShoppingCartLink;