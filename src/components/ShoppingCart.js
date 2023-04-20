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
                <p className='shopping-cart-sum'>Sum: {cartItems.reduce((prev, curr) => prev + (curr.quantity * curr.price), 0)}</p>
            </div>
            : null
            }
            
        </div>
    );
};

export default ShoppingCart;
