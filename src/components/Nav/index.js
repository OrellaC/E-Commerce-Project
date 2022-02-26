//Importing "Link" allows the <Link> below to work
import { Link } from 'react-router-dom'
import UserContext from "../../contexts/UserContext"
import { useContext } from 'react'
import updatedLogo from "../../pages/Home/Images/updatedLogo.png"
import "./styles.css"

const Nav = () => {
  const emailAdd = useContext(UserContext)
  console.log('nav', emailAdd)


  return (
    <div className='nav-container'>
      <Link to="/">
        <img src={updatedLogo} className='nav-banner' />
      </Link>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">

        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="product">Shop</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="cart">Cart</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="coupon">Coupon</Link>
              </li>



              <li className="nav-item">
                <Link className="nav-link" to="geo">GeoLocation </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="wishlist">Wishlist </Link>

                <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;
