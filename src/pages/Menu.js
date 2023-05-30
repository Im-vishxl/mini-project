import React from 'react'
import { TurfList } from '../helpers/TurfList'
import TurfItem from '../components/TurfItem'
import Searchbar from '../components/Searchbar'
import '../styles/Menu.css'
import backimg from '../assets/background1.jpg'
import TurfData from '../helpers/Data.json'

function Menu() {
  return (
    <div className="menu" style={{backgroundImage:`url(${backimg})`}}>
      <Searchbar placeholder="Enter a turf name" data={TurfData}/>
      <div className="menuList">
        { 
          TurfList.map((turfItem, key)=>{
            return (
              <TurfItem 
                key={key}
                image={turfItem.image} 
                name={turfItem.name} 
                desc={turfItem.desc} 
              />) 
            }
          )
        }
      </div>
    </div>
  )
}

export default Menu