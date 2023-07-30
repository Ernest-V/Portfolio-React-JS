import "./HeroImg2Styles.css"

import React, { Component }  from 'react';



/**per te kaluar te dhenat e className=heading ^h1 + p^ ne Project.js, About.js, Contact.js perdorem props,
me pas e kthyem HeroImg2 nga const HeroImg2 'rafce'  në:::
e kthyem në:
 class HeroImg2 extends Component  {
    render() {       }*/
class HeroImg2 extends Component {
    render() {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
        
    </div>
  )
}
}
export default HeroImg2