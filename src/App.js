import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Shop from './components/Shop';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (item) => {
    addItemToCart(item);
  }

  const addItemToCart = (item) => {
    if (item.quantity > 0) {
      const itemToUpdate = cartItems.find(x => x.id === item.id);
      if (itemToUpdate) {
        const newItem = {...itemToUpdate, quantity: itemToUpdate.quantity + item.quantity};
        setCartItems([...cartItems.filter(x => x.id !== newItem.id), newItem]);
      } else {
        setCartItems([...cartItems, item]);
      }
    }
  }

  const removeItemFromCart = (item) => {
    setCartItems([...cartItems.filter(x => x.id !== item.id)]);
  }

  const clearCart = () => {
    setCartItems([]);
  }

  const onPurchaseConfirmClose = () => {
    clearCart();
  }

  return (
    <div className="App">
      <HashRouter>
        <Header {...{cartItems}}/>
        <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home onAddToCart={onAddToCart} />}/>
          <Route path='/shop' element={<Shop onAddToCart={onAddToCart} />}/>
          <Route path='shopping-cart' 
            element={<ShoppingCart 
            cartItems={cartItems} 
            onDeleteItem={removeItemFromCart}
            onPurchaseConfirmClose={onPurchaseConfirmClose}
            />}/>
        </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
