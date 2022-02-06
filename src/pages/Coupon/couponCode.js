import React from 'react';
import { useState } from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";


const Couponcode = () => {
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);
    };
    // I used this code I found online to create a clipboard function for the coupon code 
    //https://dev.to/myogeshchavan97/an-easy-way-for-adding-copy-to-clipboard-functionality-in-react-app-4oo0
    return (
        <div className='coupon-container'>
            <h1> Congratulations! Copy the code below for 25% your first order. </h1>
            <div className='form-box'>
            <form
                type="text"
                value={"Per-Scholas-25"}
                onChange={(event) => setText(event.target.value)}> Per-Scholas-25</form>
            <CopyToClipboard text={"Per-Scholas-25"} onCopy={onCopyText}>
                <div className="copy-area">
                    <button>Copy</button>
                    <span className={`copy-feedback ${isCopied ? "active" : ""}`}>
                    </span>
                </div>
            </CopyToClipboard>
            </div>


        </div>
    );
}

export default Couponcode;
