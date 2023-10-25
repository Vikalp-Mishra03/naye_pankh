import React from 'react'
import Main from './Main'

export default function Home() {
  return (
    <>
      <div className='home'>
        <div className="bg"></div>
        <div className="right">
          <h1>It's that easy to bring a Smile on Their Faces</h1>
          <p>We don't ask for much, just help us with what you can- Be it Money, Skill or Your Time</p>
          <button>Donate Now</button>
        </div>
      </div>
      <Main />
    </>
  )
}
