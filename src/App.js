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
import Geolocation from "./pages/Geolocation"
import Wishlist from './pages/Wishlist';
import Contact from './pages/Contact';
//Contexts
import UserContext from "./contexts/UserContext"
//CSS
import "./App.css"
import Couponcode from './pages/Coupon/couponCode';
import WishlistForm from './components/Form/wishlistform';


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

  //Create a function that allows users to add items to cart
  const addToCart = (product) => {
    console.log("This item has been added to your cart: ", product)

    setCart([...cart, product])
  }

  //Create a function that allows users to also remove items from cart
  const removeFromCart = (product) => {
    const itemsArray = cart.filter((itemList) => itemList !== product)
    setCart(itemsArray)
    console.log('This item has been removed from your cart', itemsArray)
  }
  return (

    <div>
      <UserContext.Provider value={userInput}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart
            cart={cart && cart}
            removeFromCart={removeFromCart}
          />}
          />
          <Route path="coupon" element={<Coupon setUserInput={setUserInput} />} />
          <Route path="coupon/code" element={<Couponcode />} />
          <Route path="product" element={<Product
            itemList={itemList}
            addToCart={addToCart}
          />}
          />
          <Route path="geo" element={<Geolocation />}/>

          <Route path="wishlist" element={<Wishlist />}/>

          {/* <Route path="WishlistForm" element={<WishlistForm />}/> */}

          <Route path="contact" element={<Contact />}/>

        </Routes>

      </UserContext.Provider>

    </div>
  );
}

export default App;

