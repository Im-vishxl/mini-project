import React from 'react'

function TurfItem({image, name, desc}) {
  return (
    <div className="turfItem">
        <div style={{backgroundImage : `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default TurfItem