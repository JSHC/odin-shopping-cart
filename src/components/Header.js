import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shopping-cart'>Shopping Cart</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;