import React from 'react'
import qrImg from '../image/image-qr-code.png'

const card = () => {
    return (
        <>
            <div className="card">
                <img src={qrImg} alt="qr code"></img>
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </>
    )
}

export default card