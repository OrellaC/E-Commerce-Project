import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./styles.css"
import emailVer from "./Images/emailVer.png"

const Coupon = () => {
  const [userInput, setUserInput] = useState('')
  const [data, setData] = useState({})
  const [total, setTotal] = useState()


  useEffect(() => {
    fetchEmail()
    // Dependency array: if empty, it will call useEffect once only when DOM Component loads
  }, [])

  const fetchEmail = async () => {
    try {
      const response = await axios.get(`https://api.eva.pingutil.com/email?email=${userInput}`)
      console.log(response)

      setData(response.data.data)
    } catch (error) {
      console.log(error)
      console.log(data)
    }
  }

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }


  const handleSubmit = e => {
    e.preventDefault()
    console.log(userInput)
    fetchEmail()
  }


  const show = false


  return (
    <div className='parent'>
      <div className='container'>

        <div className='carousel-container'>
          {/* Carousel Image 1 */}
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={emailVer} className="img-fluid d-block w-100 caro-imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>

          <div className="form-body">
            {console.log(data)}
            <div className='header'>
              <h1>In order to receive 25% off your first order, you must subscribe to our mailing list by providing a valid email address.</h1>
            </div>

            <form onSubmit={(e) => {
              return handleSubmit(e)
            }}>
              <label htmlFor='userInput'>Email Address: </label>
              <input
                type='text'
                id='userInput'
                name='userInput'
                onChange={handleChange}
                value={data?.userInput}
                required
              />
              <input type='submit' value='Submit' />

            </form>

            <div className="email-box">
              <h4>Email Address:{data?.email_address}</h4>
              <h4>Is this email syntax valid? {String(data?.valid_syntax)}</h4>
              <h4>Is this a spam email? {String(data?.spam)}</h4>
              <h4> Is this a webmail? {String(data?.webmail)}</h4>
            </div>


            <div className='coupon-holder'>

              <Link to="/coupon/code">
                {data?.webmail ? <button type="button" className='coupon-bttn' onClick={() => ({ show: !show })}>Unlock Coupon Code</button > : null}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}


export default Coupon;
