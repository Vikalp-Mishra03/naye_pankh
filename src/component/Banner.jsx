import React from 'react'
import banner from '../assets/3.webp'

export default function Banner() {
    return (

        <>
            <div className='banner'>
                <img src={banner} alt="" />
                <div className='bg'></div>
                <div className="text">
                    <h1>Welcome to <br /> NayePankh Foundation</h1>
                    <h2>UP GOVT. | 80G & 12A Registered</h2>
                    <p>We are one of the Biggest Student led NGO of India with its operations extended in the city of Kanpur, Ghaziabad and various other cities.</p>
                </div>
            </div>

        </>
    )
    
}
