import "./FooterStyles.css"
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaWhatsapp, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#000", margin: "0 2rem 0 0", }} />
                        <div>
                            <p> Rr. Jordan Misja <br /> Tirana.</p>
                            <p> Albania</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#000", margin: "0 2rem 0 0" }} />
                            00355-68-3313333</h4>
                    </div>

                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#000", margin: "0 2rem 0 0" }} />
                            ernest.veseli@live.com </h4>
                    </div>

                </div>

                <div className="right">
                    <h4>About me.</h4>
                    <p>This is me Ernest Veseli. <br />
                        I enjoy discussing new projects and design challenges.
                    </p>
                    <div className="social" >
                        <Link to={"https://wa.me/+393453911665"}>
                            <FaWhatsapp size={40} target="blank" style={{ color: "#000", margin: "0 1rem 0 0", cursor: 'pointer', padding:'3px' }} />  </Link>
                        <Link to={"https://www.facebook.com/nesti.11"} >
                            <FaFacebook size={40} target="blank" style={{ color: "#000", margin: "0 1rem 0 0", cursor: 'pointer', padding:'3px'}} /> </Link>
                        <Link to={""}>
                            <FaInstagram size={40} target="blank" style={{ color: "#000", margin: "0 1rem 0 0", cursor: 'pointer', padding:'3px'}} />       </Link>
                        <Link to={"https://www.linkedin.com/in/ernest-veseli-547793b9/"}>
                            <FaLinkedin size={40} target="blank" style={{ color: "#000", margin: "0 1rem 0 0", cursor: 'pointer', padding:'3px'}} />  </Link>
                        <Link to={"https://github.com/Ernest-V"}>
                            <FaGithub size={40} target="blank" style={{ color: "#000", margin: "0 1rem 0 0", cursor: 'pointer', padding:'3px'}} /> </Link>
                    </div>
                </div>
            </div>
            <div className="bottom" >
                    <small className="website-copyrights" > © Ernest Veseli, 2023</small>
            </div>
        </div>
    )
}
export default Footer