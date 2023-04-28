import { useState } from 'react';
import '../styles/ShoppingCart.css';
import { FaTrash } from 'react-icons/fa';
import PurchaseConfirmation from './PurchaseConfirmation';
import { useNavigate } from 'react-router-dom';


const ShoppingCart = (props) => {
    const {cartItems, onDeleteItem} = props;
    const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false);
    const navigate = useNavigate();

    const onPurchaseConfirmClose = () => {
        props.onPurchaseConfirmClose();
        navigate('/');
    }
    return (
        <div className='shopping-cart'>
            {showPurchaseConfirm && 
            <PurchaseConfirmation 
            onClose={onPurchaseConfirmClose}
            />
            }
            <h1>Shopping Cart</h1>

            <div className='shopping-cart-item-header'>
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
            
                {cartItems.map(item => {
                    return (
                        <div className="shopping-cart-item" key={item.id}>
                            <p className='shopping-cart-item-name'>{item.name}</p>
                            <p className='shopping-cart-item-quantity'>{item.quantity}</p>
                            <p className='shopping-cart-item-price'>{item.price}</p>
                            <button 
                            className='delete-shopping-cart-item'
                            aria-label='delete-shopping-cart-item'
                            onClick={() => {onDeleteItem(item)}}>
                            <FaTrash />
                            </button>
                        </div>
                    )
                })}
                {(cartItems && cartItems.length) > 0 ?
                    <div className='shopping-cart-bottom'>
                        <button 
                        className='checkout-button'
                        onClick={() => setShowPurchaseConfirm(true)}>Checkout</button>
                        <p className='shopping-cart-sum'>Total amount: <span className='shopping-cart-sum-amount'>{cartItems.reduce((prev, curr) => prev + (curr.quantity * curr.price), 0)}</span></p>
                    </div>
                    :
                    <p className='shopping-cart-empty-message'>You haven't added any items to the shopping cart.</p>
                }
                
            </div>
            
        </div>
    );
};

export default ShoppingCart;
