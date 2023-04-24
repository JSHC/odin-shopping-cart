import { useState } from "react";
import "../styles/ShopItem.css";
const ShopItem = (props) => {
    const { id, name, price, image } = props;

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity((quantity) => parseInt(quantity + 1));
    };

    const decreaseQuantity = () => {
        setQuantity((quantity) => (quantity > 0 ? parseInt(quantity - 1) : 0));
    };

    const updateQuantity = (e) => {
        if (e.target.value === "") {
            setQuantity("");
        } else if (parseInt(e.target.value) === 0) {
            setQuantity(0);
        } else {
            setQuantity(
                parseInt(e.target.value) ? parseInt(e.target.value) : 0
            );
        }
    };
    return (
        <div className="shop-item">
            {image && 
            <div className="shop-item-image" style={{backgroundImage: `url(${image})`}}>
            </div>
            }
            <div className="shop-item-details">
            <p className="shop-item-name">{name}</p>
            <p className="shop-item-price">{price}</p>
            </div>

            <div className="shop-item-controls">
                <button onClick={decreaseQuantity} aria-label="decrease-quantity">-</button>
                <input
                    type="text"
                    value={quantity}
                    onChange={updateQuantity}
                    name="shop-item-quantity"
                    id="shop-item-quantity"
                    aria-label="quantity"
                    size={1}
                />
                <button onClick={increaseQuantity} aria-label="increase-quantity">+</button>
                <button 
                onClick={() => {
                    props.onAddToCart({id, name, price, quantity})
                    setQuantity(0);
                }}
                className="add-to-cart-button">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ShopItem;
