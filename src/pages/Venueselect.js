import React from 'react'
import Venue from '../components/Venue'
import BannerImage from '../assets/background1.jpg'

function Venueselect(props) {
  let logProps = () => {
    console.log(props.name)
  }
  return (
    <div className="home" style={{ backgroundImage:`url(${BannerImage})`}}>
      <div>
        <div style={{backgroundImage : `url(${props.image})`}}></div>
        <h1>{props.name}</h1>
          
      </div>
    
    </div>
      
  )
}

export default Venueselect