import React from 'react'
import donate1 from '../assets/13.avif'
import donate2 from '../assets/14.avif'
import donate3 from '../assets/15.avif'
import donate4 from '../assets/16.avif'
import donate5 from '../assets/20.avif'

export default function Donate() {
  return (
    <div className='donate'>
      <div className="images">
        <img src={donate1} alt="" />
        <img src={donate2} alt="" />
        <img src={donate3} alt="" />
        <img src={donate4} alt="" />
        <img src={donate5} alt="" />
      </div>
    </div>
  )
}
