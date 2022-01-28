import React from 'react';
import { Routes, Route } from 'react-router-dom'

//Components
import Nav from "./components/Nav"
//Pages
import About from "./pages/About"
import Cart from "./pages/Cart"
import Coupon from "./pages/Coupon"
import Product from "./pages/Product"
import Home from "./pages/Home"
//Contexts
import UserContext from "./contexts/UserContext"
//CSS
import "./App.css"


const App = () => {
  return (

    <div>
      < Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="coupon" element={<Coupon />} />
        <Route path="product" element={<Product />} />
      
      </Routes>
    </div>
  );
}

export default App;

