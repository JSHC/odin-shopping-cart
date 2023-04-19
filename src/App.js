import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (item) => {
    if (item.quantity > 0) {
      const itemToUpdate = cartItems.find(x => x.id === item.id);
      if (itemToUpdate) {
        const newItem = {...itemToUpdate, quantity: itemToUpdate.quantity + item.quantity};
        setCartItems([...cartItems.filter(x => x.id !== newItem.id), newItem]);
      } else {
        setCartItems([item]);
      }
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header {...{cartItems}}/>
        <Routes>
          <Route path='/' element={<Home onAddToCart={onAddToCart} />}/>
          <Route path='shopping-cart' element={<ShoppingCart cartItems={cartItems}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
