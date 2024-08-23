import React from 'react'
import './searchbox.css'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { SlPeople } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <div className='mainDiv'>
        <div className='search'>
            <div className='contents' >
                    <div className="loc">
                    
                    <div className="icons"> <CiLocationOn className='icons' /></div>
                            <div className="contenst"><b className='text'>Destination of Tour </b><br />  <span><b className='lastText'>Dubai</b></span></div>
                    </div>
                    <div className="place">
                                
                            <div className="icons"> <MdOutlineDateRange className='icons' /></div>
                            <div className="contenst"><b className='text'>Date </b><br />  <span><b className='lastText'>18 dec</b></span></div>
                    </div>
                    <div className="nationality">
                            
                    <div className="icons"> <IoMdGlobe className='icons' /></div>
                            <div className="contenst"><b className='text'>Nationality </b><br />  <span><b className='lastText'>Emirati</b></span></div>
                    </div>
                    <div className="guest">
                            
                    <div className="icons"> <SlPeople className='icons' /></div>
                            <div className="contenst"><b className='text'>Guest </b><br />  <span><b className='lastText'>1 Guest</b></span></div>
                    </div>
                    <div className="button"> 
                        <button className='searchBtn'><FaSearch /></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SearchBox