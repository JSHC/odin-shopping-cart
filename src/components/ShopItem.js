import { useState } from 'react';
import '../styles/ShopItem.css';
const ShopItem = (props) => {
    const { id, name, price } = props;

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity => parseInt(quantity + 1));
    }

    const decreaseQuantity = () => {
        setQuantity(quantity => quantity > 0 ? parseInt(quantity - 1) : 0);
    }

    const updateQuantity = (e) => {
        if (e.target.value === '') {
            setQuantity('');
        } else if (parseInt(e.target.value) === 0) {
            setQuantity(0);
        } else {
            setQuantity(parseInt(e.target.value) ? parseInt(e.target.value) : 0);
        }
        
    }
    return (
        <div className="shop-item">
            <span className="shop-item-name">{name}</span>
            <span className="shop-item-price">{price}</span>

            <div className="shop-item-controls">
                <input type="text" 
                    className='shop-item-quantity' 
                    value={quantity} 
                    onChange={updateQuantity}
                    />
                <button onClick={increaseQuantity}>Inc</button>
                <button onClick={decreaseQuantity}>Dec</button>
            </div>
        </div>
    )
}

export default ShopItem;