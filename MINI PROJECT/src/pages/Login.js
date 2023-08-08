import React from 'react'
import Bgimg from '../assets/loginbg.jpg'
import leftimg from '../assets/leftimg.png'
import rightimg from '../assets/rightimg.png'
import { Link } from 'react-router-dom';
import {apiUrl} from '../config/config'

import '../styles/Login.css'

function Login() {
  return (
    <div className="login" style={{backgroundImage:`url(${Bgimg})`}}>
        <div className="login-as">Log in as</div>
        <div className="centerContainer">
            <div className="player">
                <img src={leftimg} className="playerimg" />
                <Link to="/login/player">
                  <button>PLAYER</button>
                </Link>
                
            </div>
            <div className="manager" >
                <img src={rightimg} className="managerimg" />
                <Link to="/login/manager">
                  <button>MANAGER</button>
                </Link>
                
            </div>
        </div>      
    </div>
  )
}

export default Login