import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.avif'
export default function Header() {
    return (
        <nav>
            <Link to='/'><img src={logo} alt="" /></Link>
            <div className='nav-right'>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/certificates">Our Certificates</Link>
                <Link to="/newsPaper">Newspaper-Recognition</Link>
                <Link to="/donate">Donate</Link>
            </div>
        </nav>
    )
}
