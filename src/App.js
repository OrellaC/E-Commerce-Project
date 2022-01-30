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



const App = () => {

const [itemList, setItemList] = useState([])

  useEffect(() => {
    fetchProduct()
    // Dependency array: if empty, it will call useEffect once only when DOM Component loads
  }, [])

    const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")

      setItemList(response.data)

    } catch (error) {
      console.log(error)
    }
  }



  return (

    <div>
      < Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="coupon" element={<Coupon />} />
        <Route path="product" element={<Product itemList={itemList} />} />

      </Routes>
    </div>
  );
}

export default App;

