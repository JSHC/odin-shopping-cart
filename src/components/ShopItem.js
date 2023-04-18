const ShopItem = (props) => {
    const { id, name, price } = props;
    return (
        <div>
            <span className="shop-item-name">{name}</span>
            <span className="shop-item-price">{price}</span>
        </div>
    )
}

export default ShopItem;