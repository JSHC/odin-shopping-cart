import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='shopping-cart' element={<ShoppingCart />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
