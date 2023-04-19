import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ShoppingCartLink from './ShoppingCartLink';

const Header = (props) => {
    const {cartItems} = props;
    const getNumberOfCartItems = () => {
        if (!cartItems || cartItems.length === 0) {
            return 0;
        } else {
            const totalQuantity = cartItems.map(item => item.quantity).reduce((prev, curr) => {
            return prev + curr;
            })

            return totalQuantity;
        }
    }

    return (
        <div className="header">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><ShoppingCartLink cartItemsNumber={getNumberOfCartItems()}/></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;