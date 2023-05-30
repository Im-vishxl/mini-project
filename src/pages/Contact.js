import React from 'react'
import contactt from '../assets/contactt.jpg'
import "../styles/Contact.css"

function Contact() {
  return (
    <div className="contact">
        <div 
            className="leftSide" 
            style={{backgroundImage : `url(${contactt})`}}>
        </div>
        <div className="rightSide">
            <h1>CONTACT US</h1>
            <form id="contact-form" mthod="post">
                <label htmlFor='name'>Full name</label>
                <input name='name' placeholder='Enter full name...' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter your email...' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea 
                    rows='6' 
                    placeholder='Enter the message...' 
                    name='message'
                    required
                >

                </textarea>
                <button type='submit'>Send message</button>

            </form>
        </div>
    </div>
  )
}

export default Contact