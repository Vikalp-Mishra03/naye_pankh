import React from 'react'
import team from '../assets/4.avif'

export default function Join() {
    return (
        <div className='join'>
            
            <div className="right">
                <h4>JOIN OUR</h4>
                <h1>TEAM</h1>
                <p>"Join our team and make a difference in the lives of those in need. At NayePankh Foundation, we are committed to creating positive change and empowering communities. By joining our team, you will have the opportunity to contribute your time, skills, and ideas to help make a real impact. Whether you are passionate about education, health, or providing support during times of crisis, there is a place for you on our team. Join us today and be a part of an organization that is making a difference, one person at a time."</p>

                <div className="button">
                  <a href="/donate">  <button className='button1'>JOIN US</button></a>
                   
                </div>
            </div>
            <div className="image-container">
                <img src={team} alt="" />
            </div>
        </div>
    )
}
