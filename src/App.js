import { useState, useContext, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
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
import Couponcode from './pages/Coupon/couponCode';


const App = () => {
  const [cart, setCart] = useState([])
  const [email, setEmail] = useState('')

  const addToCart = (items) => {
    console.log(items, 'has been added to your cart')
    setCart([...cart, items])
  }

  return (

    <div>
      <UserContext.Provider value={email}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart cart={cart} />} />
          <Route path="coupon" element={<Coupon setEmail={setEmail} />} />
          <Route path="coupon/code" element={<Couponcode />} />
          <Route path="product" element={<Product />} />

        </Routes>

      </UserContext.Provider>

    </div>
  );
}

export default App;

