import React from 'react'
import aboutus from '../assets/aboutus.jpg'
import "../styles/About.css"
import { Search } from '@mui/icons-material'


function About() {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage : `url(${aboutus})`}}>
          
        </div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>
            Welcome to TurfBooking! We are a dedicated team of sports enthusiasts and tech experts passionate about simplifying your turf booking experience. Our app was born from the desire to connect sports enthusiasts like you with the best turfs in town, all at your fingertips. Whether you're a soccer lover, a cricket champion, or a fitness enthusiast, TurfBooking is here to provide you with a seamless platform to discover, book, and enjoy your favorite sports. With a user-friendly interface and a wide range of available turfs, we strive to make sports more accessible and enjoyable for everyone. We take pride in our commitment to privacy and security, ensuring that your personal information is safeguarded at all times. Join us in our mission to promote an active lifestyle and a love for sports. Let's play and win together with TurfBooking!


            </p>
        </div>

    </div>
  )
}

export default About