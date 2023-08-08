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
                <Link to="/" className="nav_link">Home</Link>
                <Link to="/booknow" className="nav_link">Book Now</Link>
                <Link to="/login" className="nav_link">Log In</Link>
                {/* <Link to="/findgames">Find games</Link> */}
                <Link to="/about" className="nav_link">About</Link>
                <Link to="/contact" className="nav_link">Contact</Link>
            </div> 
        </div>
        <div className="rightSide">
            <Link to="/"className="nav_link">Home</Link>
            <Link to="/booknow" className="nav_link">Book Now</Link>
            <Link to="/login" className="nav_link">Log In</Link>
            <Link to="/findgames" className="nav_link">Find games</Link>
            <Link to="/about" className="nav_link">About</Link>
            <Link to="/contact" className="nav_link">Contact</Link>
            
            <button onClick={toggleNavbar}> 
                <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar