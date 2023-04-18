import { Link } from 'react-router-dom';
import '../styles/Header.css';
import ShoppingCartLink from './ShoppingCartLink';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><ShoppingCartLink /></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;