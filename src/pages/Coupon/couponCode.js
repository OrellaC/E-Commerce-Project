import React from 'react';
import { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";
import emailVer from "./Images/emailVer.png"

const Couponcode = () => {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };


 
    // I used the code below I found online to create a clipboard function for the coupon code 
    //https://dev.to/myogeshchavan97/an-easy-way-for-adding-copy-to-clipboard-functionality-in-react-app-4oo0
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


                    <div className='coupon-container'>
                            <div className="card p-4 text-center text-white bg-primary rounded">
                                
                                    <h2 className="card-title"> Congratulations! Copy the code below for 25% off your first order.</h2>

                                    <form
                                        className='card-body'
                                        type="text"
                                        value={"Per-Scholas-25"}
                                        onChange={(event) => setText(event.target.value)}><h4>Per-Scholas-25 </h4> </form>

                                    <CopyToClipboard text={"Per-Scholas-25"} onCopy={onCopyText}>
                                        <div className="copy-area">
                                            <button className='btn btn-lg btn-warning'>Copy</button>
                                            <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                                            </span>
                                            
                                        </div>
                                    </CopyToClipboard>
                                </div>
                                <div className="card-footer text-muted">
                                    If you encounter any issues with this code please contact our help desk at 555-555-5555 or helpdesk@ortech.org
                                </div>
                            </div>



                
                        </div>
                    </div>
                </div>
            

        
    );
}

export default Couponcode;
