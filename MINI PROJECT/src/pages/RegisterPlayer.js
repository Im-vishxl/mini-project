import React, { useState } from 'react';
import axios from 'axios';
import rightimg from '../assets/aboutus.jpg';
import '../styles/Player.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {apiUrl} from '../config/config'

import contactt from '../assets/contactt.jpg'
import "../styles/Contact.css"

const RegisterPlayer = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    mobile: '',
    email: '',
    dob: '',
    gender: '',
    user:'',
    password:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/api/user/register`, formData);
      alert('User registered successfully!');
      navigate('/booknow');
    } catch (error) {
      alert('Failed to register user.');
    }
  };

  const handleCancel= (e) => {
    navigate('/login/player');
  }

 const renderForm = (
    <div className="contact">
            <div 
            className="leftSide" 
            style={{backgroundImage : `url(${contactt})`}}>
        </div>
        <div className="rightSide">
            <h1>Register Player</h1>
                <form onSubmit={handleSubmit}>
        <div>
         
          <input type="text" name="name"  placeholder="Your name.." value={formData.name} onChange={handleChange} required />
        </div>
        <div>
        
          <textarea name="description" placeholder="Type something about you.." value={formData.description} onChange={handleChange} required />
        </div>
        <br/>
        <div>
         
          <input type="text" name="mobile"  placeholder="Your contact number.." value={formData.mobile} onChange={handleChange} required />
        </div>
            <br/>
        <div>
          <input type="email" name="email"  placeholder="Your email.." value={formData.email} onChange={handleChange} required />
        </div>
        <br/>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <br/>
        <div className="pass">
          <input type="password" name="password" placeholder="Create your password"   value={formData.password} onChange={handleChange} required />
        </div>
        <br/>
        <div className="pass">
          <input type="password" name="confirm_password" placeholder="Confirm your password"   value={formData.confirm_password} onChange={handleChange} required />
        </div>
      
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === 'other'}
              onChange={handleChange}
              required
            />
            Other
          </label>
        </div>
        <div>
          <button type="submit">Submit</button> &nbsp;&nbsp;
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </form>
      </div>
        <div className="rightSide" style={{backgroundImage:`url(${rightimg})`}}>
            
        </div>
    </div>
    
  );


  return (
    <div className="app">
      <div className="login-form">    
        {isSubmitted ? <div></div> : renderForm}
      </div>
    </div>
  );
};

export default RegisterPlayer;

