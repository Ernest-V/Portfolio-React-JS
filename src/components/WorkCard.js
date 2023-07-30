import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";


const WorkCard = (props) => {







  return (

   <div className="project-card" >

  
                        {/* // imageSrc, title, text, view    keto te dhena/props merren nga WorkCardData.js */}
      <img src={props.imageSrc} alt="Project img" />
      <h2 className="project-title" >{props.title}</h2>
      <div className="project-details" >
        <p>{props.text}</p>
        <div className="pro-btns" >
          <NavLink to={props.view} className="btn" target="blank" >View</NavLink>
          <NavLink to="url.com" className="btn" >Source</NavLink>
        </div>
      </div>
    </div>



  )
    

}
export default WorkCard