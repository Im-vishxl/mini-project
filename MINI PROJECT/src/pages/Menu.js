import React ,{ useState, useEffect } from 'react';
import SearchTurf from '../components/SearchTurf'
import '../styles/Menu.css'
import backimg from '../assets/background1.jpg'

function Menu() {
  return (
    <div className="menu" style={{backgroundImage:`url(${backimg})`}}>
      <SearchTurf></SearchTurf>
    </div>
  )
}

export default Menu