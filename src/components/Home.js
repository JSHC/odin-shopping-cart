import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = (props) => {
    return (
        <div className="home-container">
            <div className='home-content'>
                <h1>JUST ANOTHER FAKE STORE</h1>
                <Link to='/shop'>SHOP NOW</Link>
            </div>
        </div>
    );
};

export default Home;
