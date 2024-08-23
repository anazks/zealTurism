import React from 'react'
import './widget.css'
import { FaBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

import { LuArrowLeftCircle } from "react-icons/lu";


export default function Widget() {
  return (
    <div className='widgets'>
            <div className="head">
                <div><h2 className='deal'>Deals & Offers</h2></div>
                <div className='arrow'><div>View Al </div> <div style={{display:'flex'}}><IoIosArrowDropleft className='directionIcon' /> <IoIosArrowDropright className='directionIcon'/></div>
                </div>
            </div>
            <div className="cards">
                    <div className="types">
                            <ul>
                                <li style={{color:'orange'}}>Tours</li>
                                <li>Holidays</li>
                                <li>Umrah Trip</li>
                                <li>Car Transfer</li>
                                <li>Visa</li>
                            </ul>
                    </div>
                    <div className="card">
                            <div className="imgContainer">
                                        <img src="assets/img/Tourism Image/Payment-summry.png" alt="" />
                            </div>
                            <div className='Contents'>
                                <div className='heading'>
                                      <div>
                                         <p><b>Dubai Water Cruiser Dinner</b></p>
                                     </div>
                                     <div>
                                         <FaBookmark  className='icons'/>
                                     </div>
                                </div>
                                <div className='location'>
                                     <div><FaLocationDot className='icons'/></div>
                                     <div><p>Downtown Dubai, Dubai</p></div>
                                </div>
                        <div className='contentsWrapper'>

                        
                                <div className='rating'>
                                    <div><span>From</span></div>
                                    <div className='starRating'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />

                                    </div>
                                </div>
                                <div className="price">
                                        <div className="aed">
                                                <h3><b>AED 120.00</b></h3>
                                        </div>
                                        <div className="ratings">
                                                <span>4.5(15.4)</span>
                                        </div>
                                </div>
                                <div className='cities'>
                                        <div>
                                            <FaRegClock className='icons'/> 
                                        </div>
                                    <div>
                                        <span><b></b></span> 
                                        <span style={{marginLeft:'4px'}} className='daysDes'>7  Days <b>2</b> Cites</span>
                                    </div>
                                    <div>
                                       
                                      
                                    </div>
                                </div>
                                <div className='lastOptiosn'>
                                            <div>  <IoMdCheckmark className='icons'/> </div>
                                            <div className='dailyTour'>   Daily tour</div>
                                            <div>  <IoMdCheckmark className='icons'/> </div>
                                            <div className='dailyTour'>Sightseeing</div>
    
                                        </div>
                            </div>
                            </div>
                    </div>
                    <div className="card">
                            <div className="imgContainer">
                                        <img src="assets/img/Tourism Image/Payment-summry.png" alt="" />
                            </div>
                            <div className='Contents'>
                                <div className='heading'>
                                      <div>
                                         <p><b>Dubai Water Cruiser Dinner</b></p>
                                     </div>
                                     <div>
                                         <FaBookmark  className='icons'/>
                                     </div>
                                </div>
                                <div className='location'>
                                     <div><FaLocationDot className='icons'/></div>
                                     <div><p>Downtown Dubai, Dubai</p></div>
                                </div>
                        <div className='contentsWrapper'>

                        
                                <div className='rating'>
                                    <div><span>From</span></div>
                                    <div className='starRating'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />

                                    </div>
                                </div>
                                <div className="price">
                                        <div className="aed">
                                                <h3><b>AED 120.00</b></h3>
                                        </div>
                                        <div className="ratings">
                                                <span>4.5(15.4)</span>
                                        </div>
                                </div>
                                <div className='cities'>
                                        <div>
                                            <FaRegClock className='icons'/> 
                                        </div>
                                    <div>
                                        <span><b></b></span> 
                                        <span style={{marginLeft:'4px'}} className='daysDes'>7  Days <b>2</b> Cites</span>
                                    </div>
                                    <div>
                                       
                                      
                                    </div>
                                </div>
                                <div className='lastOptiosn'>
                                            <div>  <IoMdCheckmark className='icons'/> </div>
                                            <div className='dailyTour'>   Daily tour</div>
                                            <div>  <IoMdCheckmark className='icons'/> </div>
                                            <div className='dailyTour'>Sightseeing</div>

                                        </div>
                            </div>
                            </div>
                    </div>
                    <div className="card">
                            <div className="imgContainer">
                                        <img src="assets/img/Tourism Image/Payment-summry.png" alt="" />
                            </div>
                            <div className='Contents'>
                                <div className='heading'>
                                      <div>
                                         <p><b>Dubai Water Cruiser Dinner</b></p>
                                     </div>
                                     <div>
                                         <FaBookmark  className='icons'/>
                                     </div>
                                </div>
                                <div className='location'>
                                     <div><FaLocationDot className='icons'/></div>
                                     <div><p>Downtown Dubai, Dubai</p></div>
                                </div>
                        <div className='contentsWrapper'>

                        
                                <div className='rating'>
                                    <div><span>From</span></div>
                                    <div className='starRating'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />

                                    </div>
                                </div>
                                <div className="price">
                                        <div className="aed">
                                                <h3><b>AED 120.00</b></h3>
                                        </div>
                                        <div className="ratings">
                                                <span>4.5(15.4)</span>
                                        </div>
                                </div>
                                <div className='cities'>
                                        <div>
                                            <FaRegClock className='icons'/> 
                                        </div>
                                    <div>
                                        <span><b></b></span> 
                                        <span style={{marginLeft:'4px'}} className='daysDes'>7  Days <b>2</b> Cites</span>
                                    </div>
                                    <div>
                                       
                                      
                                    </div>
                                </div>
                                <div className='lastOptiosn'>
                                            <div>  <IoMdCheckmark className='icons'/> </div>
                                            <div className='dailyTour'>   Daily tour</div>
                                            <div>  <IoMdCheckmark className='icons'/> </div>
                                            <div className='dailyTour'>Sightseeing</div>

                                        </div>
                            </div>
                            </div>
                    </div>
            </div>
    </div>
  )
}
