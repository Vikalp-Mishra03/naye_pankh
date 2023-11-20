import React from 'react'
import newspaper from '../assets/12.avif'
import Feedback from './Feedback'
export default function Newspaper() {
  return (
    <>
      <div className='newspaper'>
        <img src={newspaper} alt="" />
      </div>
      <Feedback />
    </>
  )
}
