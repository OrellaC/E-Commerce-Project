import axios from 'axios';
import React from 'react';
import {Link} from 'react-router-dom';

const Practice = () => {
    const [userInput, setUserInput] = useState('')
    const [data, setData] = useState([])




    useEffect(() => {
        fetchProduct()
        // fetchCart()
        // Dependency array: if empty, it will call useEffect once only when DOM Component loads
    }, [])

    const fetchEmail = async () => {
        try {
            const response = await axios.get(`https://api.eva.pingutil.com/email?email=${userInput}`)

            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault()
      
    }


    return (
        <div className="form-body">
            In order to receive 25% off your first order, you must subscribe to our mailing list by providing your full name and a valid email address.

            <form className="row g-3 needs-validation border p-2 m-1" noValidate onSubmit={handleSubmit} >
                <div className="col-md-4">
                    <label htmlFor="validationCustom01" className="form-label">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="validationCustom01"
                        required />

                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="text"
                        className="form-control"
                        id="validationCustom02"
                        required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="validationCustomUsername" className="form-label">Email </label>
                    <div className="input-group has-validation">
                        <input type="email"
                            className="form-control"
                            id="userInput"
                            aria-describedby="inputGroupPrepend"
                            value={userInput}
                            onChange={handleChange}
                            required />
                        <div className="invalid-feedback">
                            Please provide a valid email address.
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" htmlFor="invalidCheck">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>


                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>

        </div>
    );
}

export default Practice;
