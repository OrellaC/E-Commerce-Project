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
  const [itemList, setItemList] = useState([])
  const [userInput, setUserInput] = useState('')
  const [cart, setCart] = useState([])


  useEffect(() => {
    fetchProduct()
    // fetchCart()
    // Dependency array: if empty, it will call useEffect once only when DOM Component loads
  }, [])

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      console.log(itemList)

      setItemList(response.data)

    } catch (error) {
      console.log(error)
      console.log(itemList)
    }
  }


  const addToCart = (product) => {
    console.log("This item has been added to your cart: ", product)

    setCart([...cart, product])
  }

  return (

    <div>
      <UserContext.Provider value={userInput}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart cart={cart&&cart} />} />
          <Route path="coupon" element={<Coupon setUserInput={setUserInput} />} />
          <Route path="coupon/code" element={<Couponcode />} />
          <Route path="product" element={<Product
            itemList={itemList}
            addToCart={addToCart}
          />}
          />

        </Routes>

      </UserContext.Provider>

    </div>
  );
}

export default App;

