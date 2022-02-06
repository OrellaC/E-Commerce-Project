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



    return (
        <div className='coupon-container'>
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
    );
}

export default Couponcode;
