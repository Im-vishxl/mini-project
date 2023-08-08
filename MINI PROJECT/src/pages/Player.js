
import React, { useState } from 'react'
import rightimg from '../assets/aboutus.jpg'
import '../styles/Player.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {apiUrl} from '../config/config'
const PlayerLoginPage = () => {
  const [user, setuser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const handleUserChange = (e) => {
    setuser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const errors = {
  user: "Invalid user",
  password: "Invalid Password"
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = async(e) => {
    e.preventDefault();
     var { user, password } = document.forms[0];
     console.log('user:', user);
     var submitted_user=user.value;
     var submitted_pwd=password.value;
  // Find user login info
  try {
    const database_users = await axios.get(`${apiUrl}/api/users`);
    console.log("users-----",database_users,submitted_user)
    const userData = database_users.data.find((user) => user.user === submitted_user);
    console.log("userData-----matches>",userData)
    // Compare user info
      if (userData) {
        if (userData.password !== password.value) {
          // Invalid password
          setErrorMessages({ name: "password", message: errors.password });
        } else {
          setIsSubmitted(true);
          //calling login api to generate token
          try {
            const generateToken = await axios.post(`${apiUrl}/api/login`, { user:submitted_user, password:submitted_pwd });
            // Assuming your API returns a token upon successful login
            const authToken = generateToken.data.token;
            // Store the token in localStorage or a state management library like Redux
            // (Note: Storing tokens in localStorage has security implications, and you should consider other secure methods in production)
            localStorage.setItem('authToken', authToken);
            // Perform any other actions after successful login (e.g., show a success message)
      
            // Redirect to the protected page (Dashboard) after successful login
            navigate('/booknow'); // Replace '/dashboard' with the URL of your protected page
            window.location.reload(true);
          } catch (error) {
            // Handle login error (e.g., show an error message on the form)
            console.error('Login failed:', error);
          }
        }
      } else {
        // user not found
        setErrorMessages({ name: "user", message: errors.user });
      }
  } catch (error) {
    // Handle login error (e.g., show an error message on the form)
    console.error('Login failed:', error);
  }

  };

  const renderForm = (
    <div className="playerlogin">
        <div className="leftSide">
          <div className="login-box">
            <h1 className="login-h1">LOGIN </h1>
              <form onSubmit={handleSubmit} autoComplete="off">
                  <div className="input-item">
                    <div className="uname">
                      <input
                          type="text"
                          id="user"
                          name="user"
                          value={user}
                          onChange={handleUserChange}
                          placeholder="Enter your user name.."
                          required  />
                       {renderErrorMessage("user")}
                    </div>
                    <div className="pass">
                      <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="Enter your Password" 
                          required 
                      />
                       {renderErrorMessage("password")}  
                    </div>
                    <div className="forgot-pass">
                      <p>forgot password ?</p>
                    </div>
                  </div>
                  <div >
                  <button type="submit" className="login-btn">Login</button>
                  <Link to="/player/register">
                  <p>Register To PlayOn</p>
                  </Link>
                  </div>
              </form>
          </div>
            
        </div>
        <div className="rightSide" style={{backgroundImage:`url(${rightimg})`}}>
            
        </div>
    </div>
    
  );


  return (
    <div className="app">
      <div className="login-form">
        {/* <div className="title">Sign In</div> */}
        {isSubmitted ? <div></div> : renderForm}
      </div>
    </div>
  );
};

export default PlayerLoginPage; 

