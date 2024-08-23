import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import './card.css'
import { LuArrowLeftCircle } from "react-icons/lu";
function MidCard({holiday}) {
  return (
    <div>
        <div className='widgets'>
            <div className="head" style={{marginTop:"25px"}}>
                <div><h2 className='deal'>Explore Best Selling Tours</h2></div>
                <div className='arrow'><div>View Al </div> <div style={{display:'flex'}}><IoIosArrowDropleft className='directionIcon' /> <IoIosArrowDropright className='directionIcon'/></div>
                </div>
            </div>
            <br />
        
            <div className="cards">
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
                                {
                                    holiday ?   
                                    <div className='famlily'>
                                                <div className="fam">
                                                        <span>Family</span>
                                                </div>
                                                <div>
                                                    <span>Standerd</span>
                                                </div>
                                </div> :
                                         ""  
                                }
                                
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
                                        {
                                    holiday ?   
                                    <div className='famlily'>
                                                <div className="fam">
                                                        <span>Family</span>
                                                </div>
                                                <div>
                                                    <span>Standerd</span>
                                                </div>
                                </div> :
                                         ""  
                                }
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
                                        {
                                    holiday ?   
                                    <div className='famlily'>
                                                <div className="fam">
                                                        <span>Family</span>
                                                </div>
                                                <div>
                                                    <span>Standerd</span>
                                                </div>
                                </div> :
                                         ""  
                                }
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
                                        {
                                    holiday ?   
                                    <div className='famlily'>
                                                <div className="fam">
                                                        <span>Family</span>
                                                </div>
                                                <div>
                                                    <span>Standerd</span>
                                                </div>
                                </div> :
                                         ""  
                                }
                            </div>
                            </div>
                    </div>
            </div>
    </div>

    </div>
  )
}

export default MidCard