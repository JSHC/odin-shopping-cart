import { useState } from 'react';
import '../styles/ShopItem.css';
const ShopItem = (props) => {
    const { id, name, price } = props;

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity => quantity + 1);
    }

    const decreaseQuantity = () => {
        setQuantity(quantity => quantity > 0 ? quantity - 1 : 0);
    }
    return (
        <div className="shop-item">
            <span className="shop-item-name">{name}</span>
            <span className="shop-item-price">{price}</span>

            <div class="shop-item-controls">
                <input type="text" className='shop-item-quantity' value={quantity}></input>
                <button onClick={increaseQuantity}>Inc</button>
                <button onClick={decreaseQuantity}>Dec</button>
            </div>
        </div>
    )
}

export default ShopItem;