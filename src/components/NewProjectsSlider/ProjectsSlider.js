import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import WorkCard from "../WorkCard";
import WorkCardData from "../WorkCardData";

export const SimpleSlider = (props) => {

    // const ProjectsSlider = (props) =>


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
        
    };


    if (window.screen.width <= 768) {
      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
    }

    return (

        <Slider {...settings}   style={{padding: '0 200px'}}  >

                {WorkCardData.map((value, index) => {
                    return (
                        <div 
                        >
                            <WorkCard
                            
                            

                                key={index}
                                // imageSrc, title, text, view    keto te dhena merren nga WorkCardData.js
                                imageSrc={value.imageSrc}
                                title={value.title}
                                text={value.text}                              
                                view={value.view}                                
                            />

                        </div>
                        
                        

                    )
                })}




                {/* <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}



        </Slider>





    );

}