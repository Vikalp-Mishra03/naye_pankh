import React from 'react'
import certificate1 from '../assets/9.avif' 
import certificate2 from '../assets/10.avif' 
import certificate3 from '../assets/11.avif' 

export default function Certificates() {
  return (
    <div className='certificates'>
      <h1>Our Certificates</h1>
      <div className="certificate">
        <img src={certificate1} alt="" />
        <img src={certificate2} alt="" />
        <img src={certificate3} alt="" />
      </div>
    </div>
  )
}
