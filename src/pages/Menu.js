import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'
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
          MenuList.map((menuItem, key)=>{
            return (
              <MenuItem 
                key={key}
                image={menuItem.image} 
                name={menuItem.name} 
                desc={menuItem.desc} 
              />) 
            }
          )
        }
      </div>
    </div>
  )
}

export default Menu