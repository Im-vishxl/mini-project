import React from 'react'
import { useState } from 'react'
import backimg from '../assets/background1.jpg'
import '../styles/findgames.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date)
    }

    return (
        <div>
            <Calendar onChange={onChange} value= {date} />
        </div>
    )
}

function findgames() {
  return (
    <div className="find" style={{backgroundImage:`url(${backimg})`}}>
        <div className="turfname">WIN ARENA</div>
        <div className="container">
            <div className="gamelist">
                <div className="item"><div className="owner">A' s team</div></div>
                <div className="item"><div className="owner">B's team</div></div>
                <div className="item"><div className="owner">C's team</div></div>
                <div className="item"><div className="owner">D's team</div></div>
                <div className="item"><div className="owner">E's team</div></div>   
            </div>
            <div className="calendar">
                <ReactCalendar/>
            </div>
        </div>
        
    </div>
  )
}

export default findgames