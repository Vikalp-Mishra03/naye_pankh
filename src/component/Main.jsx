import React from 'react'
import boy from '../assets/2.avif'

export default function Main() {
    return (
        <>
            <div className='main'>
                <div className="image-container">
                    <img src={boy} alt="" />
                </div>
                <div className="right">
                    <h4>ABOUT US</h4>
                    <h1>Think global, Act local.</h1>
                    <p>"NayePankh Foundation" is a non governmental organisation with a strong desire to help the society and make it a better place for all, by doing everything in our power and to make our vision successful we would require your vital support. Service to mankind is the service to god. Let’s revolutionise the society together!.</p>

                    <div className="button">
                        <button className='button1'>LEARN MORE</button>
                        <button className='button2'>OUR CERTIFICATES</button>
                    </div>
                </div>
            </div>

        </>
    )
}
