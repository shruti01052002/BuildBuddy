import React from "react";
import Cont from '../images/cont.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        <>
        <section id="contact">
            <div className="rows">
                <div className="cols">
                    <div className="cont_img">
                        <img src={Cont} alt="contact" style={{ height: "500px", width: "550px" }} />
                    </div>
                </div>
                <div className="cols">
                    <div className="cont_img">
                        <h1 className="cont_head">CONTACT</h1>
                        <h2 className="cont_subhead">Be in Touch With Us</h2>
                        <div className="contact_group">
                            <h3>Phone</h3>
                            <h3>123-456-7890</h3>
                            <br></br>
                            <br></br>
                            <h3>Email</h3>
                            <h3>buildbuddy@gmail.com</h3>
                            <br></br>
                            <br></br>
                            <h3>Social</h3>
                            <FacebookIcon style={{ color: "#5271ff" }} />
                            <TwitterIcon style={{ color: "#38b6ff" }} />
                            <InstagramIcon style={{ color: "#cb6ce6" }} />
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Contact;