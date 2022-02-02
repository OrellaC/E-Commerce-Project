import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./styles.css"

const Coupon = () => {
  const [userInput, setUserInput] = useState('')
  const [data, setData] = useState({})

  // const navigate = useNavigate()



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

    // navigate('/coupon/code')
  }

  return (

    <div className="form-body">
      {console.log(data)}

      <form onSubmit={(e) => {
        return handleSubmit(e)
      }}>
        <label htmlFor='userInput'>Email Address: </label>
        <input
          type='email'
          id='userInput'
          name='userInput'
          onChange={handleChange}
          value={data?.userInput}
        />
        <input type='submit' value='Submit' />
      </form>

      <h1>{data?.email_address}</h1>
      <h1>{String (data?.valid_syntax)}</h1>



    </div>

  );
}


export default Coupon;
