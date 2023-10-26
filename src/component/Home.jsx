import React from 'react'
// import header from '../assets/header.webp'
import Carousel1 from '../assets/carousel1.avif'
import Carousel2 from '../assets/carousel2.avif'
import Carousel3 from '../assets/carsousel3.avif'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Main from './Main'
import Banner from './Banner'
import Join from './Join'
import Founder from './Founder'
import { Carousel } from 'react-responsive-carousel'
// import Carousels from './Carousels'
// import Carousel from './Carousels'


export default function Home() {
  return (
    <>

      <div className='home'>
        {/* <img src={header} alt="" /> */}
        <div className="bg"></div>
        <div className="right">
          <h1>It's that easy to bring a Smile on Their Faces</h1>
          <p>We don't ask for much, just help us with what you can- Be it Money, Skill or Your Time</p>
          <button>Donate Now</button>
        </div>
      </div>
      <Main />
      <Banner />
      {/* <Carousels /> */}
      <Carousel autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}>
        <div>
          <img src={Carousel1} />
        </div>
        <div>
          <img src={Carousel2} />
        </div>
        <div>
          <img src={Carousel3} />

        </div>

      </Carousel>
      <Join />
      <Founder />
    </>
  )
}
