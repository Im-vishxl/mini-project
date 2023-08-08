import React from 'react'

import turf1 from "../assets/turf1.jpg"
import { Link } from 'react-router-dom'; // Navigate to details page on clicking on turf image

function TurfItem({image, name, description,id}) {
  return (
    <div className="turfItem">
       <Link to={`/turf/${id}`} key={id}>
     <div style={{backgroundImage : `url(${turf1})`}}></div>
    </Link>
       <h1>{name}</h1>
        <p>{description}</p>
    </div>
  )
}

export default TurfItem