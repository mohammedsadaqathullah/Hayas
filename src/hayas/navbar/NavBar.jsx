import { useState } from 'react'
import logo from '../../Images/hayaspng.png'
import { Link } from 'react-router-dom'
import { FaHouse } from "react-icons/fa6";
import './navbar.css'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='navContainer'>
            <ul className='ulOne'>
                <li>
                    <Link to="/"> <img src={logo} alt="logo" /></Link>
                </li>
                <li className='hamburger'
                    onClick={() => setIsOpen(!isOpen)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
            </ul>
            <ul className='ulTwo'
                id={isOpen ? "showMenu" : "notShowMenu"}>
                <Link to="/" style={{ color: "rgb(250, 94, 146)", textDecoration: "none" }}> <li className='homeItem'>Home</li></Link>
                <Link to="/Grocery" style={{ textDecoration: "none", color: "rgb(250, 94, 146)" }}> <li>Order Grocery</li></Link>
                <Link to="/Food" style={{ textDecoration: "none", color: "rgb(250, 94, 146)" }}> <li>Order Food</li></Link>
                <li>Contact us</li>
                <li><button>Save Your Address <FaHouse size={20} />
                </button></li>
            </ul>
        </nav>
    )
}

export default NavBar