import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/background1.jpg'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home" style={{ backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1>The super app</h1>
        <p>MEET PALS OVER THE GAME!</p>
        <Link to="/booknow">
          <button>
            BOOK NOW!
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home