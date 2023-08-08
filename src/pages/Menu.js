import React from 'react'
import { TurfList } from '../helpers/TurfList'
import TurfItem from '../components/TurfItem'
import Searchbar from '../components/Searchbar'
import '../styles/Menu.css'
import backimg from '../assets/background1.jpg'
import TurfData from '../helpers/Data.json'
import { NavLink } from 'react-router-dom'
import Venue from '../components/Venue'
import Venueselect from './Venueselect'

function Menu() {
  return (
    <div className="menu" style={{backgroundImage:`url(${backimg})`}}>
      <Searchbar placeholder="Enter a turf name" data={TurfData}/>
      <div className="menuList">
        { 
          TurfList.map((turfItem, key)=>{
            // const data = turfItem.name;
            // console.log(data)
            return (
              <div>
                {/* <NavLink to="/booknow/venue"> */}
                  <TurfItem 
                    key={key}
                    image={turfItem.image} 
                    name={turfItem.name} 
                    desc={turfItem.desc}
                    
                  />
                  
                {/* </NavLink> */}
                
              </div>
              
              
              
              
              ) 
              
            }
            
          )
          
        }
      </div>
    </div>
  )
}

export default Menu