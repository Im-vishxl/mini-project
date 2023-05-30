import React from 'react'

function MenuItem({image, name, desc}) {
  return (
    <div className="menuItem">
        <div style={{backgroundImage : `url(${image})`}}></div>
        <h1>{name}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default MenuItem