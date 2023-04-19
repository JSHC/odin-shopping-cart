import ShopItem from "./ShopItem";

const Home = (props) => {
    const shopItems = [
        {id: 1, name: 'Item1', price: 10}
    ]

    const onAddToCart = (item) => {
        props.onAddToCart(item);
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
