import React from 'react'
import './footer.css'
import { FaArrowRightLong } from "react-icons/fa6";

function Footer() {
  return (
    <div className='footer'>
        <div className="Footercontents">
                <div className="topFooter">
                        <div className="logoFooter">
                                <div className="img">
                                    <img src="assets/img/logo_wihte.png" alt="" className='whiteLogo'  style={{height:'80px'}}/>
                                </div>
                                <br />
                                <div className='textsFooter'>
                                    <p>One-stop travel answer for making remarkable special plans and exercises in a problem free way.</p>
                                </div>
                            <br />
                          <h1 className='footerText'><b>We’ll keep you up to date</b></h1>
                            <div className='footerInput'>
                                    <div>
                                          <input type="text" placeholder='Enter your email id to subscribe' className='boxEmail' />
                                    </div>
                                    <div className='footericon'>
                                          <FaArrowRightLong />
                                    </div>
                            </div>
                        </div>

                        <div className='box_Service'>
                                <h3><b style={{color:'white'}}>Our Services</b></h3>
                                <ul>
                                    <li>Hotels</li>
                                    <li>Tours</li>
                                    <li>Holidays</li>
                                    <li>Customaize Holidays</li>
                                    <li>Umrah Trip</li>
                                    <li>Specail Deals</li>
                                </ul>
                        </div>
                        <div className='box_Service'>
                                <h3><b style={{color:'white'}}>Company</b></h3>
                                <ul>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                    <li>Branches</li>
                                    <li>Blog</li>
                                    <li>News</li>
                                    <li>Carees</li>
                                </ul>
                        </div> <div className='box_Service'>
                                <h3><b style={{color:'white'}}>Info</b></h3>
                                <ul>
                                    <li>Cancellation Policy</li>
                                    <li>Tearms & Condetions</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Policy</li>
                                    
                                    
                                </ul>
                        </div>
                        <div className='box_Service'>
                                <h3><b style={{color:'white'}}>Contact Us</b></h3>
                                <ul>
                                    <li>Email:info@zeaitourism.com</li>
                                    <li>phone:+91 719876543210</li>
                                   
                                </ul>
                        </div>
                   
                </div>
        </div>
    </div>
  )
}

export default Footer