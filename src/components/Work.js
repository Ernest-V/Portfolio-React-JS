import "./WorkCardStyles.css";

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";

// import Project1 from "../assets/pr1/Project-1A.png";
// import Project2 from "../assets/pr2/Project-2a.png";
// import Project3 from "../assets/pr3/Project-3A.png";
// import { NavLink } from "react-router-dom";



const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
            <div className="project-container"  >
                {WorkCardData.map((value, index) => {
                    return (
                        <WorkCard 
                        key={index}
                        // imageSrc, title, text, view    keto te dhena merren nga WorkCardData.js
                        imageSrc={value.imageSrc}
                        title={value.title} 
                        text={value.text} 
                        view={value.view} 
                         />
                    )
                }) }
                
            </div>

    </div>
  )
}
export default Work;