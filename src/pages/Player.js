import React, { useState } from 'react'
import rightimg from '../assets/aboutus.jpg'
import '../styles/Player.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login submitted');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="playerlogin">
        <div className="leftSide">
          <div className="login-box">
            <h1 className="login-h1">LOGIN </h1>
              <form onSubmit={handleSubmit}>
                  <div className="input-item">
                    <div className="email">
                      <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Enter your email.."
                      />
                    </div>
                    <div className="pass">
                      <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="password" 
                          
                      />
                      {/* <button className="eye-btn">btn</button> */}
                      
                    </div>
                    <div className="forgot-pass">
                      <p>forgot password ?</p>
                    </div>
                  </div>
                  <button type="submit" className="login-btn">Login</button>
              </form>
          </div>
            
        </div>
        <div className="rightSide" style={{backgroundImage:`url(${rightimg})`}}>
            
        </div>
    </div>
    
  );
};

export default LoginPage;