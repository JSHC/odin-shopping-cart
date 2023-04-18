import ShopItem from "./ShopItem";

const Home = () => {
    const shopItems = [
        {id: 1, name: 'Item1', price: 10}
    ]
    return (
        <div>
            <h1>Home</h1>
            <div className="shop-items-container">
                {shopItems.map(item => {
                    return <ShopItem {...item} key={item.id}/>
                })}
            </div>
        </div>
    );
};

export default Home;
