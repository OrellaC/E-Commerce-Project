import React from 'react';

const Coupon = () => {
    return (
    //   <div>
    //         In order to receive 25% Off all orders, you must subscribe to our mailing list by providing your full name and a valid email address.

            <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationCustom01" value="John" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">Last name</label>
              <input type="text" className="form-control" id="validationCustom02" value="Doe" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">Email </label>
              <div className="input-group has-validation">
                {/* <span className="input-group-text" id="inputGroupPrepend"></span> */}
                <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                <div className="invalid-feedback">
                  Please provide a valid email address.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationCustom03" required />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
   
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                <label className="form-check-label" for="invalidCheck">
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

        //   </div> 
    
    );
}


export default Coupon;
