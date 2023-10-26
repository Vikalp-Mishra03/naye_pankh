import React from 'react'
import group from '../assets/5.avif'
import { AiFillInstagram, AiFillTwitterCircle, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer>
      <div className="contact">
        <h1>Get in Touch</h1>
        <div className="contact-info">career@nayepankh.com</div>
        <div className="contact-info"><span>WhatsApp</span>: +91-6306266557</div>
        <div className="contact-info"><span>Calling</span>: +91- 8318500748</div>
        <div className="contact-info"><span>Office Address</span>: 104A/279 P.Road Kanpur</div>
        <div className="contact-info"><span>Pin Code</span>: 208012</div>
        <div className="icons">
          <div className="icon"><a href="https://www.instagram.com/nayepankhfoundation" target='blank'><AiFillInstagram /></a></div>
          <div className="icon"><a href="https://twitter.com/nayepankh" target='blank'><AiFillTwitterCircle /></a></div>
          <div className="icon"><a href="https://www.facebook.com/nayepankhfoundation" target='blank'><AiFillFacebook /></a></div>
          <div className="icon"><a href="https://www.youtube.com/@nayepankhfoundation" target='blank'><AiFillYoutube /></a></div>
        </div>
      </div>
      <div className="img">
        <img src={group} alt="" />
      </div>
    </footer>
  )
}
