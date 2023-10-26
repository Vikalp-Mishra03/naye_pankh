import React from 'react'
import donate1 from '../assets/13.avif'
import donate2 from '../assets/14.avif'
import donate3 from '../assets/15.avif'
import donate4 from '../assets/16.avif'
import donate5 from '../assets/20.avif'
import donate6 from '../assets/18.avif'
// import donate7 from '../assets/19.avif'
export default function Donate() {
  return (

    <>
      <div className='donate'>
        <div className="images">
          <img src={donate1} alt="" />
          <img src={donate2} alt="" />
          <img src={donate3} alt="" />
          <img src={donate4} alt="" />
          <img src={donate5} alt="" />
        </div>

        <h1>"Together, Let's Make a Difference!"</h1>
        <div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScQRE7vFFPaDJhbdBZJubFX-HUFLBmZTmewkxaIPVhz0pQXsQ/viewform"><button className='button1'>Donate Now</button></a>
        </div>
      </div>

      <div className="message">
        <p>Dear Supporters and Friends, </p>
        <div className='letter'>NayePankh Foundation was founded with a simple yet powerful vision - to uplift the underprivileged and marginalized communities and provide them with access to education, healthcare, and basic necessities that we often take for granted. We strongly believe that every child has the right to dream and achieve their aspirations, irrespective of their socio-economic background. We have been working relentlessly towards this goal, but we need your support to continue our efforts and make a lasting impact. As you read this, countless children and families are struggling to survive without the most basic necessities. They lack access to clean water, sanitation, and proper healthcare facilities. Most of them are unable to attend school due to financial constraints or lack of infrastructure. They are trapped in a cycle of poverty and hopelessness, and they need our help. We at Nayepankh Foundation strive to break this cycle and provide a ray of hope to those in need. With your support, we can continue to provide education, healthcare, and other basic amenities to these communities. We can empower them to lead better lives and realize their true potential. Every donation, no matter how small, can make a huge difference. Your support can provide a child with a school uniform, a pair of shoes, or even a nutritious meal. It can provide a family with access to clean water, sanitation, and healthcare facilities. It can change the trajectory of someone's life forever. We understand that times are tough, and everyone is going through their own struggles. But we urge you to think of those who are less fortunate and extend a helping hand. Your generosity can make a world of difference to someone in need. We know that we can count on your support to continue our mission. Your donations will help us reach more communities and make a meaningful impact in the lives of those who need it the most. Let's come together and make a difference. Thank you for considering our cause and supporting Nayepankh Foundation. Your support means the world to us and those we serve. Let's work together to create a better world for all. </div>

        <p>With heartfelt gratitude, </p>

        <div className='name'>Prashant Shukla, Founder & President, NayePankh Foundation</div>
      </div>

      <div className="donteNow">
        <div className="img">
          <img src={donate6} alt="" />
        </div>
        <div className="donatenow">
          <h4>Donate Now</h4>
          <p>Imagine for a moment that you are struggling to make ends meet. You're worried about how you'll pay for basic necessities like food, shelter, and healthcare. Now, imagine that someone steps forward and offers a helping hand - a small donation that can make all the difference in your life. That feeling of relief and gratitude is immeasurable. By donating to a cause you care about, you have the power to make that difference in someone's life. You can provide hope and support to those who need it most, and create a ripple effect of kindness and generosity in the world. So, if you have the means to give, think about the impact you can make. Your donation may just be the lifeline that someone desperately needs.</p>
          <div className="click">Click on the button below to donate to Us</div>
          {/* <div className="qrcode"> */}
            {/* <img src={donate7} alt="" /> */}
          {/* </div> */}
          <div className='btn'>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScQRE7vFFPaDJhbdBZJubFX-HUFLBmZTmewkxaIPVhz0pQXsQ/viewform"><button className='button1'>Donate Now</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
