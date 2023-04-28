import { Link } from "react-router-dom";
import "../styles/Header.css";
import ShoppingCartLink from "./ShoppingCartLink";

const Header = (props) => {
    const { cartItems } = props;
    const getNumberOfCartItems = () => {
        if (!cartItems || cartItems.length === 0) {
            return 0;
        } else {
            const totalQuantity = cartItems
                .map((item) => item.quantity)
                .reduce((prev, curr) => {
                    return prev + curr;
                });

            return totalQuantity;
        }
    };

    return (
        <div className="header">
            <nav>
                <ul className="header-nav-list">
                    <li className="header-logo">
                        <Link to="/">JAFS</Link>
                    </li>
                    <ul className="header-links">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                    </ul>
                    <li>
                        <ShoppingCartLink
                            cartItemsNumber={getNumberOfCartItems()}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
