import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import the useParams hook
import '../styles/Home.css'
import '../styles/Style.css'
import BannerImage from '../assets/background1.jpg'

const TurfBookingPage = () => {
  const { id } = useParams(); // Extract the turf ID from URL parameters
  const [selectedDate, setSelectedDate] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
//show future date only in calander
const dateInput = document.getElementById('dateInput');
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
dateInput.setAttribute('min', formattedDate);

    // Fetch available slots data when both turf ID and selectedDate change
    if (id && selectedDate) {
     fetchAvailableSlots(id, selectedDate);
    }
  }, [id, selectedDate]);

  const fetchAvailableSlots = async (turfId, date) => {
    try {
      // setIsLoading(true);
      const response = await axios.get(`/api/slots?turfId=${turfId}&date=${date}`);
      setAvailableSlots(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching available slots:', error);
      setIsLoading(false);
    }
  };

  const handleDateChange = (event) => {
   
    setSelectedDate(event.target.value);
  };

  return (
    <div className="turfbooking_maindiv" style={{ backgroundImage:`url(${BannerImage})`}}>
    
      <h1 className='turfbooking_div_h1'>Find Your Slot</h1>
      <div className="container1">
        <div className="gamelist1">
            <div className="item"><div className="owner">8 - 9AM<br />&nbsp;&nbsp;Win arena, Chungam</div></div>
            <div className="item"><div className="owner">9 - 10AM<br />&nbsp;&nbsp;Win arena, Chungam</div></div>
            <div className="item"><div className="owner">10 - 11AM<br />&nbsp;&nbsp;Win arena, Chungam</div></div>
            <div className="item"><div className="owner">12 - 1PM<br />&nbsp;&nbsp;Win arena, Chungam</div></div>   
        </div>
      </div>
          
      <div className='turfbooking_div_lbl'>
        <label >Select Date:</label>
        <span>&nbsp;&nbsp;<input type="date" id="dateInput" value={selectedDate} onChange={handleDateChange} /></span>
      </div>
      {
      isLoading ? (
           <div className="spinner-overlay">
           <div className="spinner"></div>
         </div>
        ) : 
        (availableSlots.length > 0 ? (
        <div>
          <h2 className='turfbooking_div_lbl'>Available Slots for Turf {id} on {selectedDate}:</h2>
          <ul>
            {availableSlots.map((slot) => (
              <li className='turfbooking_div_lbl_succsess' key={slot.id}>{slot.startTime} - {slot.endTime}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className='turfbooking_div_lbl_error'>No available slots for Turf {id} on {selectedDate}</p>
      )
      )
      }
    </div>
  );
};

export default TurfBookingPage;
