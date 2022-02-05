import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./styles.css"

const Coupon = () => {
  const [userInput, setUserInput] = useState('')
  const [data, setData] = useState({})
  const [total, setTotal] = useState()


  const navigate = useNavigate()



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

    navigate('/coupon/code')
  }

  const show = false

  const errorMssg =
    "please enter a valid email address"


  // const checkEmail = (data) => {
  //   if (data?.webmail){
  //     return <button type="submit" className='coupon-bttn' onClick={() => ({ show: !show })}>Unlock Coupon Code</button> ;
  //   }
  // }

  return (

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


        {data?.webmail ? <button type="submit" className='coupon-bttn' onClick={() => ({ show: !show })}>Unlock Coupon Code{useNavigate}</button> : null}



        {/* <h4 style={{ display: (show ? "block" : "none") }}>{useNavigate}</h4> */}
      </div>

    </div>

  );
}


export default Coupon;
