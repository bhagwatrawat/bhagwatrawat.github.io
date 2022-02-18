import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './contact.css';
export default function Contact() {
  return(
    <div className="_contact">
       <div className="_contact-title">
         <div/>
         Contact Us
       </div>
       
        <form className="_contact-form">
          <input type="text" placeholder="Your Name" />
          <PhoneInput
          containerClass="_contact-phone"
          country={'in'}
          placeholder="Phone Number"
          size={20}
        />
          <input type="text" placeholder="Email"/>
          <textarea>Enter Your Message</textarea>
          <button disabled>Submit</button>
        </form>

    </div>
  ) 
}
