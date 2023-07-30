import React from "react"
import '../SliderStyle.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide)
  return (
    <button
    onClick={moveSlide}
    className={direction === "next" ? "button-slide next" : "button-slide prev" } >
        <div>{direction === "next" ? <FaArrowRight/> : <FaArrowLeft/> } </div>
    </button>

    


  )
}