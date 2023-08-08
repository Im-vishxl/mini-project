import React from 'react'
// import TurfItem from './TurfItem'
// import { TurfList } from '../helpers/TurfList'

function Venue({image,name,desc}) {
  return (
    <div>
      <div style={{backgroundImage : `url(${image})`}}></div>
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
    
    
  )
}

export default Venue