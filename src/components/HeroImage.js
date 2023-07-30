import "./HeroImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import PortImg from "../assets/ern-rem-img.png.png";
import BlobPort from "../assets/blob3.svg";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const HeroImage = () => {
  return (
    <div className="hero">


      <div className="content" >
        <p>Hi! I am <b style={{borderBottom:'1px solid black'}} >Ernest Veseli.</b> <br /> React Developer. </p>
        <h1> I'M A <br /> FREELANCER </h1>
        <div style={{width:'50%',   display:'flex',  justifyContent: 'space-between'}} >
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light ">Contact</Link>
        </div>

        <div className="social-icons">
        <Link to={"https://wa.me/+393453911665"}>
                            <FaWhatsapp size={35} target="blank" style={{ color: "#000", margin: "0 1rem 0 1rem", cursor: 'pointer', padding:'3px' }} />  </Link>
                        <Link to={"https://www.facebook.com/nesti.11"} >
                            <FaFacebook size={35} target="blank" style={{ color: "#000", margin: "0 1rem 0 1rem", cursor: 'pointer', padding:'3px'}} /> </Link>
                        <Link to={""}>
                            <FaInstagram size={35} target="blank" style={{ color: "#000", margin: "0 1rem 0 1rem", cursor: 'pointer', padding:'3px'}} />       </Link>
                            <Link to={"https://www.linkedin.com/in/ernest-veseli-547793b9/"}>
                            <FaLinkedin size={35} target="blank" style={{ color: "#000", margin: "0 1rem 0 1rem", cursor: 'pointer', padding:'3px'}} />  </Link>
        </div>

      </div>
      <div className="mask">
        <img className="blob-img" src={BlobPort} alt="Blob" />
        <img className="into-img" src={PortImg} alt="PortfolioImg" />
      </div>

    </div>
  )
}
export default HeroImage;