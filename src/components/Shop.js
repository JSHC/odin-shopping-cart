import ShopItem from "./ShopItem";
import '../styles/Shop.css';

import image1 from '../images/green-t-shirt.jpg';
import image2 from '../images/cobalt-blue-t-shirt.jpg'
import image3 from '../images/purple-t-shirt.jpg';
import image4 from '../images/backpack-in-black.jpg';
import image5 from '../images/pair-of-navy-blue-skate-shoes.jpg'
import image6 from '../images/pair-of-black-and-white-sneakers.jpg'
import image7 from '../images/street-wear-navy-jacket.jpg'
import image8 from '../images/zip-up-jacket-for-men.jpg'

const Shop = (props) => {
    const shopItems = [
        {id: 1, name: 'Green T-Shirt', price: 10, image: image1},
        {id: 2, name: 'Blue T-Shirt', price: 10, image: image2},
        {id: 3, name: 'Purple T-Shirt', price: 10, image: image3},
        {id: 4, name: 'Black Backpack', price: 30, image: image4},
        {id: 5, name: 'Blue Shoes', price: 70, image: image5},
        {id: 6, name: 'Black and White Shoes', price: 75, image: image6},
        {id: 7, name: 'Navy Blue Jacket', price: 65, image: image7},
        {id: 8, name: 'Black Jacket', price: 70, image: image8},
    ]

    const onAddToCart = (item) => {
        if (props.onAddToCart) {
            props.onAddToCart(item);
        }
    }

    return (
        <div className="shop-container">
        <div className="shop-items-container">
            {shopItems.map(item => {
                return <ShopItem {...item} onAddToCart={onAddToCart} key={item.id}/>
            })}
        </div>
    </div>
    )
}

export default Shop;