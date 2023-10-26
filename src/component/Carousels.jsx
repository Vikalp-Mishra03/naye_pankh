import React from 'react'
import Carousel1 from '../assets/carousel1.avif'
import Carousel2 from '../assets/carousel2.avif'
import Carousel3 from '../assets/carousel3.avif'
import { Carousel } from 'react-responsive-carousel'

export default function Carousels() {
  return (
    // <div className='carousel'>
    //   <img src={Carousel1} alt="" />
    // </div>
    <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
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
  )
}
