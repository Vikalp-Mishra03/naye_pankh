// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import logo from '../assets/logo.avif'
// export default function Header() {
//     return (
//         <nav>
//             <Link to='/'><img src={logo} alt="" /></Link>
//             <div className='nav-right'>
//                 <NavLink exact activeClassName="active" to='/' >Home</NavLink>
//                 <NavLink  activeClassName="active" to='/about' >About Us</NavLink>
//                 <NavLink  activeClassName="active" to='/certificates' >Our Certificates</NavLink>
//                 <NavLink  activeClassName="active" to='/newsPaper' >Newspaper-Recognition</NavLink>
//                 <NavLink  activeClassName="active" to='/donate' >Donate</NavLink>
//             </div>
//         </nav>
//     )
// }

import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.avif'
import '../style/navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h3>   <Link to='/'><img src={logo} alt="" /></Link></h3>
            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/certificates">Our Certificates</Link>
                <Link to="/newsPaper">Newspaper-Recognition</Link>
                <Link to="/donate">Donate</Link>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;