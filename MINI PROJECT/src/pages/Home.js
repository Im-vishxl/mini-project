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
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d432579.71992483473!2d75.36360676269365!3d11.866882460122996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sturf%20in%20kannur!5e0!3m2!1sen!2sin!4v1685339746126!5m2!1sen!2sin" width="400" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
      </div>
      
      
    
  )
  
}

export default Home