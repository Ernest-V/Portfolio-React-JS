import "./AboutContentStyles.css"
import { FaReact, FaJava, FaCss3, FaHtml5, FaBootstrap } from "react-icons/fa";


import React from "react";
import { Link } from "react-router-dom";
import App from "./AboutSkills";





const AboutContent = () => {
  return (
    <>
        <div className="about">
            <h3>Hi there, I'm Ernest</h3>
            <h1>I'm a React front-end developer.</h1>
            <p> I take a creative, collaborative & strategic approach to defining & designing solution. <br/>
            I create responsive secure websites for my clients. <br/> 
            Let's work together. </p>
            <Link to="/contact" >
                <button className="btn ">Contact</button>
            </Link>
        </div>

        <App />



            <div className="icon-container" >

                <div style={{padding:"15px" }}><FaReact size='100px' color="aqua" /><b>React.js</b></div> 
                <div style={{padding:"15px" }}><FaJava size='100px' color="yellow" padding="15px" /><b>Javascript</b></div> 
                <div style={{padding:"15px" }}><FaHtml5 size='100px' color="orange" /><b>HTML5</b></div> 
                <div style={{padding:"15px" }}><FaCss3 size='100px' color="blue" /><b>CSS3</b></div> 
                <div style={{padding:"15px" }}><FaBootstrap size='100px' color="violet" /><b>Bootstrap</b></div>



            </div>


    </>


  )
}
export default AboutContent;