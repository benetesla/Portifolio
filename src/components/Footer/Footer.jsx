/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin } from 'react-icons/fa'
import ReactTypingEffect from 'react-typing-effect'
import './Footer.scss'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer__container'>
                <div className="Location">
                    <div className='Left'>
                        <div className="Home">
                            <FaHome size={20} style={{ color: 'black', marginRight: '2rem' }} />
                            <p>
                                Nova Odessa, SP
                            </p>
                            <p>
                                Brazil
                            </p>
                        </div>
                        <div className="Phone">
                            <a href="https://wa.me/5519999528951">

                                <i className="fab fa-whatsapp">
                                    <br />
                                    <br />
                                    Whatsapp
                                </i>
                            </a>
                        </div>

                        <div className="Email">
                            <a href="mailto:benevaniosantos930@gmail.com">
                                <i className="fas fa-envelope">
                                    <br />
                                    <br />
                                    Email
                                </i>
                            </a>
                        </div>
                    </div>


                </div>
                <div className='Right'>
                    <h4>
                        <ReactTypingEffect
                            text={["ABOUT ME"]}
                            speed={100}
                            eraseSpeed={100}
                            typingDelay={1000}
                            eraseDelay={1000}
                            cursorRenderer={cursor => <h4>{cursor}</h4>}
                        />
                    </h4>
                    <p>
                        I am a MERN stack developer, MongoDB, Express, React, NodeJS
                    </p>
                    <div className="Share">
                        <span>Contact me</span>
                        
                            <a alt="Facebook"
                                href='https://www.facebook.com/benevanio.santos.7/'
                                target='_blank'
                            >
                                <FaFacebook size={30} style={{ color: 'white', marginRight: '2rem' }} />
                                <a alt="Github"
                                    href='https://github.com/benetesla'
                                    target='_blank'>
                                    <FaGithub size={30} style={{
                                        color: 'white', marginRight: '2rem'
                                    }} />
                                </a>
                            </a>
                            <a alt="Instagram"
                                href='https://www.instagram.com/bene_tesla/'
                                target='_blank'>
                                <FaInstagram size={30} style={{ color: 'white', marginRight: '2rem' }} />
                            </a>
                            <a href="https://www.linkedin.com/in/benevanio-santos-0b1b3b1b3/">
                                <FaLinkedin size={30} style={{ color: 'white', marginRight: '2rem',pading: '2rem' }} />
                            </a>
                       
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer