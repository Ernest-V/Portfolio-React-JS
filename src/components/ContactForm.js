import React from "react";
import "./ContactFormStyle.css"
import { useState } from "react";

const ContactForm = () => {
  
  const [data, setData] = useState({name:"", email:"", phone:"", message:""});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(data);
  }

  return (
    // <div className="form-container">
    //     <form id="contact-fom" >
    //         <label htmlFor="name" >Name</label>
    //         <input type="text" id="name" className="form-control" placeholder="Enter your name" autoComplete="none" />

    //         <label htmlFor="email" >Your email address <span className="mandatory">*</span></label>
    //         <input type="email" id="email" className="form-control" placeholder="Enter your email" aria-required="true" autoComplete="none" />

    //         <label htmlFor="phone" >Your phone number <span className="mandatory">*</span></label>
    //         <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" id="phoneNumber" className="form-control" placeholder="Enter your number" aria-required="true" autoComplete="none"  />

    //         <label htmlFor="subject" >Subject</label>
    //         {/* <input type="text" id="subject" className="form-control" placeholder="Subject" /> */}
    //         <select className="formSelect" >
    //           <option>Subject*</option>
    //           <option>Web Design</option>
    //           <option>Web Development</option>
    //           <option>Digital Marketing</option>
    //         </select>

    //         <label htmlFor="message" >Message</label>
    //         <textarea type="text" id="message" placeholder="Type your message here" rows="7" />

    //         <div>
    //         <label className="checkLabel" htmlFor="condition" >Accept all terms and conditions.</label>
    //         <input type="checkbox" name="conditions" id="conditions" />
    //           <span className="error" >Please accept all terms and conditions.</span>
    //           </div>
            
    //         <button className="btn">Submit</button>
    //     </form>
    // </div>

    <form method="post" onSubmit={handleSubmit}>
      <h2>Contact <span>Here</span></h2>

    <label htmlFor="name" >Name</label>
      <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter your name" />

    <label htmlFor="email" >Email</label>
      <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>

    <label htmlFor="phone" >Phone</label>
      <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="Enter your phone number"/>

    <label htmlFor="subject" >Subject</label>
      <select className="formSelect" >
        <option >Subject*</option>
        <option >Web Development</option>
        <option >Web Design</option>
        <option >Digital Marketing</option>
      </select>

      <textarea name="message" id="" onChange={handleChange} value={data.message} cols="30" rows="10" placeholder="Message me here..." />

      <button type="submit" className="btn">Send</button>

      {/* <p>{data.name} {data.email} {data.phone} {data.message}</p> */}
    </form>


  )
}
export default ContactForm