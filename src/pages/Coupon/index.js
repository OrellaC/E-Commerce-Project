import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./styles.css"
import emailVer from "./Images/emailVer.png"
import envelope from "./Images/envelope.png"
import emailLogo from "./Images/emailLogo.jpeg"
import emailTech from "./Images/emailTech.png"

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
        </div>

        {/* Bootstrap Card */}
        <div className="card text-center">
          <div className="card-body">
            <h3 className="card-title">Email Verification</h3>
            <p className="card-text">In order to receive 25% off your first order, you must subscribe to our mailing list by providing a valid email address. </p>
            {console.log(data)}
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
              <input type='submit' value='Submit' className="btn btn-primary" />
            </form>

            <div className='coupon-holder'>
              <Link to="/coupon/code">
                {data?.webmail ? <button type="button" className='coupon-bttn' onClick={() => ({ show: !show })}>Unlock Coupon Code</button > : null}
              </Link>
            </div>

          </div>
        </div>

        <div className="card mb-3 center border-primary" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={emailTech} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">API Parameters</h5>
                <h6 className="card-text">Email Address: {data?.email_address}</h6>
                <p>Is this email syntax valid? {String(data?.valid_syntax)} </p>
                <p className="card-text">Is this a spam email? {String(data?.spam)}</p>
                <p className="card-text">Is this a webmail? {String(data?.webmail)}</p>

                <div className="card-body text-center">
                  <h5 className="card-title">This information will appear on the client's side.</h5>
                  <p className="card-text"> Client's will be able to see which parameters of the API the user's email matches. </p>
                  <p>If the user's email does not validate true for "Is this a webmail", they will not be able to view the coupon code until they enter a valid email address. </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>


  );
}


export default Coupon;
