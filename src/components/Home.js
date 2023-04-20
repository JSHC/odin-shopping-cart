import ShopItem from "./ShopItem";
import '../styles/Home.css';

const Home = (props) => {
    const shopItems = [
        {id: 1, name: 'Item1', price: 10},
        {id: 2, name: 'Item2', price: 20}
    ]

    const onAddToCart = (item) => {
        if (props.onAddToCart) {
            props.onAddToCart(item);
        }
    }
    return (
        <div>
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
