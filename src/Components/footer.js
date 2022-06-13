import React from "react";
import {FontAwesomeIcon, }  from '@fortawesome/react-fontawesome'
import { faCode, faMagnifyingGlass, faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faLinkedin, faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons'
import '../css/footer.css'

function Footer(){
    return(
        <>
            <section className="contact-links" >
                <ol>
                    <li><a href="https://www.linkedin.com/in/roshan-khadka-050b3417b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="social-icon"/></a></li>
                    <li><a href="https://github.com/roshan-77" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="social-icon"/></a></li>
                    <li><a href="https://www.facebook.com/whitz.rock" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} className="social-icon"/></a></li>
                    <li><a href="https://www.instagram.com/roshan_whitz/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></a></li>
                </ol>
            </section>
            <section className="contact-me" id="contact-links">
                <section className="container">
                    <div className='get-in-touch'>
                        <h1>Get in Touch</h1>
                        <ul>
                            <li>Email: roshan.khadka.u@gmail.com</li>
                            <li>Phone: +61 452 642 153</li>
                        </ul>
                    </div>
                    <div className='find-me-on'>
                        <h1>Find me on</h1>
                        <FontAwesomeIcon icon={faArrowLeft} className='left-arrow'/>
                    </div>
                </section>
            </section>
            <section className="footer">
                <section className="container">
                    <div className="copyright">&copy; Copyright 2022

                    </div>
                </section>
            </section>
        </>
    )
}

export default Footer;