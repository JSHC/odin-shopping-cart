import ShopItem from "./ShopItem";
import '../styles/Home.css';

const Home = (props) => {
    const shopItems = [
        {id: 1, name: 'Item1', price: 10, image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f'},
        {id: 2, name: 'Item2', price: 20, image: ''}
    ]

    const onAddToCart = (item) => {
        if (props.onAddToCart) {
            props.onAddToCart(item);
        }
    }
    return (
        <div className="home-container">
            <h1>Home</h1>
            <div className="shop-items-container">
                {shopItems.map(item => {
                    return <ShopItem {...item} onAddToCart={onAddToCart} key={item.id}/>
                })}
            </div>
        </div>
    );
};

export default Home;
