import React, { useState } from "react";
import './SliderStyle.css';
// import ProjectCardData from "./WorkCardData";
// import WorkCardData from "./WorkCardData";
import BtnSlider from "./BtnSlider/BtnSlider";
import WorkCardData from "./WorkCardData";
// import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
// import { FaArrowAltCircleLeft } from "react-icons/fa";

import { NavLink } from "react-router-dom";



export default function ComponentSlider (props)  {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== WorkCardData.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === WorkCardData.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex ===  1) {
            setSlideIndex(WorkCardData.length)
        }
     }
     const moveDot = index => {
        setSlideIndex(index)
     }

    return (
        <div className="container-slider"      >

            <h2>Some of my projects</h2>



            {WorkCardData.map((props, index) => {
                return (
                    <div  
                    key={index +1}  className={slideIndex === index + 1 ? "slide active-anim" : "slide"}   
                        >
                    
                        <img src={props.imageSrc} alt="Project img" />
                        <h2  >{props.title}</h2>

                        <div >
                            <p>{props.text}</p>
                            <div className="pro-btns" >
                                <NavLink to={props.view} className="btn" target="blank" >View</NavLink>
                                <NavLink to="url.com" className="btn" >Source</NavLink>
                            </div>
                        </div>                    
                    




                    </div>
                )
            })}


        <BtnSlider className="prev" moveSlide={prevSlide} direction={"prev"} ></BtnSlider>
        <BtnSlider className="next" moveSlide={nextSlide} direction={"next"} ></BtnSlider>

        

            {/* <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
        


        <div className="container-dots">
            {Array.from({length: 4}).map((item, index) => (
                <div 
                onClick={() => moveDot(index +1)} 
                className={slideIndex === index + 1 ? "dot dot-active" : "dot"} 
                ></div>
            ))}
        </div>

        </div>
    )

}
