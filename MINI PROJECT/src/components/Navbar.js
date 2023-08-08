import React, {useState, useEffect} from 'react'
import Logo from '../assets/footylogo.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css";
import CustomPopup from '../components/CustomPopup';

function Navbar() {
    const[openLinks, setOpenLinks] = useState(false)
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate(); 
  // useEffect(() => {
  //       const authToken = localStorage.getItem('authToken');
  //       console.log("authToken----->>",authToken)
  //       if(authToken!=null){
  //           setIsLoggedIn(true); 
  //       }else{
  //           console.log("elaseeee")
  //           setIsLoggedIn(false); 
  //       }
  //      // !! converts truthy/falsy value to true/false
  //     }, []);
    const toggleNavbar = () => {
        setOpenLinks(!openLinks)
    }
    const handleLogout = () => {
        console.log("logout clicked-----")
         setShowPopup(true);
       
      };
      const callLogout= () => {
       localStorage.removeItem('authToken');
        // setIsLoggedIn(false);
        navigate('/'); // Replace '/dashboard' with the URL of your protected page
        window.location.reload(true);
      }
      const handleClosePopup = () => {
        console.log("close clicked")
        setShowPopup(false);
      };
  return (
    <div >
        <div className="navbar">
        <div className="leftSide" id={ openLinks ? "open" : "close" }>
            <img src={Logo} />
            <p className="blue">Play</p><p className="lock">On</p>            
            
            <div className="rightSide">
                      <Link to="/">Home</Link>
                      <Link to="/login">Login</Link>
                      <Link to="/booknow">Book Now</Link>
                      <Link to="/findgames">Find games</Link>
                      <Link to="/about">About</Link>
                      <Link to="/contact">Contact</Link>
                    <Link onClick={handleLogout}>Log Out</Link>
            </div>
            
        {/* <div className="rightSide">
                          <Link to="/">Home</Link>
                          <Link to="/login">Log In</Link>
        </div> */}
        
    </div>
    </div>
    <CustomPopup
        isVisible={showPopup}
        confirmationMessage="Are you sure you want to log out?"
        onClosePopup={handleClosePopup}
        onConfirmButtonClickActions={callLogout} // Add the 'onLogout' prop here
      />
    </div>
  )
}

export default Navbar