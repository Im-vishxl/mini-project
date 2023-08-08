import React, { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar'
import '../styles/SearchTurf.css'
import TurfItem from '../components/TurfItem'
import axios from 'axios';
import {apiUrl} from '../config/config'


function SearchTurf() {
  const [turfs, setTurf] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state to true
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Call the API and fetch the turf list data when the component mounts
    fetchListData();
  }, []);

  const fetchListData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/turf`); // Replace '/api/list' with your API endpoint URL
      console.log("TURF LIST--->",response)
      setTurf(response.data); // Update the state with the fetched list data
      setIsLoading(false); // Set loading state to false when the API response is received
    } catch (error) {
      console.error('Error fetching list data:', error);
      setIsLoading(false); // Also set loading state to false on error
    }
  };

    // Filter the list data based on the search query
    const filteredListData = turfs.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div>
      {/* <Searchbar placeholder="Enter a turf name" data={turfs}/>  */}
      <div className="search">
        <div className="searchInput">
            <input type="text" placeholder="Search Turf" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
      </div>
      <div className="menuList">
        
         {isLoading ? (
          <div className="loading-spinner"></div>
        ) : (
          filteredListData.map((turfItem, key)=>{
            return (
              <TurfItem 
                key={key}
                image={turfItem.image} 
                name={turfItem.name} 
                id={turfItem.id}
                description={turfItem.description} 
              />) 
            }
          ))
         }
        
      </div> 
    </div>
  );
}

export default SearchTurf;
