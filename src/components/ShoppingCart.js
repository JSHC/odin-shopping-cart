import '../styles/ShoppingCart.css';

const ShoppingCart = (props) => {
    const {cartItems} = props;
    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartItems && cartItems.length > 0 ? 
            <div className='shopping-cart-item-header'>
            <p>Product</p>
            <p>Quantity</p>
            <p>Price</p>
            
            {cartItems.map(item => {
                return (
                    <div className="shopping-cart-item" key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })}
            </div>
            : null}
            
        </div>
    );
};

export default ShoppingCart;
