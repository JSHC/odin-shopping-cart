import '../styles/ShoppingCart.css';

const ShoppingCart = (props) => {
    const {cartItems, onDeleteItem} = props;
    return (
        <div>
            <h1>Shopping Cart</h1>

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
                            <button 
                            aria-label='delete-shopping-cart-item'
                            onClick={() => {onDeleteItem(item)}}>
                            X
                            </button>
                        </div>
                    )
                })}
                {(cartItems && cartItems.length) > 0 ?
                    <p className='shopping-cart-sum'>Sum: {cartItems.reduce((prev, curr) => prev + (curr.quantity * curr.price), 0)}</p>
                    :
                    <p className='shopping-cart-empty-message'>You haven't added any items to the shopping cart.</p>
                }
                
            </div>
            
        </div>
    );
};

export default ShoppingCart;
