import React from 'react'
import { NavLink } from 'react-router-dom'
import Venueselect from '../pages/Venueselect';
import Venue from './Venue'

// const NavUnlisted = styled.ul`
//   a {
//     text-decoration: none;
//   }
// `;

function TurfItem(props) {
  const names = props.name;
  
  return (
    
      <div className="turfItem">
          
            <NavLink 
              to="/booknow/venue" 
              style={({isActive}) =>({
                color: isActive ? 'ffff':'ffff',
              })}
            >
            <div style={{backgroundImage : `url(${props.image})`}}></div>
            <h1 className="name">{props.name}</h1>
            {/* <Venueselect names={props.name} images={props.image} /> */}
            <p>{props.desc}</p>
            
            
          </NavLink>
          
          
      </div>
      
     
  )
  
}

export default TurfItem;