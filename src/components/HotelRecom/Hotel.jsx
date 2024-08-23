import React from 'react'
import './hotel.css'
function Hotel() {
  return (
    <div className='hotelDiv'>
            <h2> <b>Hotels Recommended by Our Experts   </b> </h2>
        <div className='mainDivhotel'>
            <div className="left">
                <img src="assets/img/Tourism Image/2.jpg" alt="" />
                <div className='nameBox'>
                    <h3><b className='dubai'>Dubai</b></h3>
                    <h4>12 Hotels</h4>
                    <h6>Starting from <span className='aed'>AED 120.00</span></h6>
                </div>
            </div>
            <div className="right">
                        <div className="leftInner">
                                    <div className='leftTopImg'>
                                        <img src="assets/img/Tourism Image/3.jpg" alt="" />
                                    </div>
                                    <div className='leftBottom'>
                                        <img src="assets/img/Tourism Image/4.jpg" alt="" />
                                    </div>
                                </div>
                        <div className="innerRight">
                                 <div className='RightImages'>
                                        <img src="assets/img/Tourism Image/5.jpg" alt="" />
                                    </div>
                                    <div className='RightImages'>
                                        <img src="assets/img/Tourism Image/6.jpg" alt="" />
                                    </div>
                                    <div className='RightImages'>
                                        <img src="assets/img/Tourism Image/7.jpg" alt="" />
                                    </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Hotel