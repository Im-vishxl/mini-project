import React, {useState} from 'react'
import Logo from '../assets/footylogo.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css"

function Navbar() {
    const[openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
  return (
    <div className="navbar">
        <div className="leftSide" id={ openLinks ? "open" : "close" }>
            <img src={Logo} />
            <p className="blue">Blue</p><p className="lock">Lock</p>            
            <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/booknow">Book Now</Link>
                <Link to="/login">Log In</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/booknow">Book Now</Link>
            <Link to="/login">Log In</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}> 
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar