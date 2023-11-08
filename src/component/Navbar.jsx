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
                <Link to='/account'> <button className="button2">Account</button></Link>
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