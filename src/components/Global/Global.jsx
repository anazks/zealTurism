import React from 'react'
import './global.css'

function Global() {
  return (
    <>
    <br />
    <br />
  <div className='gobalCards'>
  {/* <h2>Global Visa Services</h2> */}
    <br />
      <div className="cardPic">
            <img src="assets/img/Tourism Image/G_1.jpg" alt="" />
            <div className="shadowOverlay"></div>
            <div className="overlayText">
                    <div className="country">
                            <h1><b>Oman Visa</b></h1>
                            <p>Satrting from <span style={{color:'orangered'}}>AED 120.00</span></p>
                    </div>
                    <div className="countryLogo">
                            <img src="assets/img/flag/Oman.png" alt="" />
                    </div>
            </div>
      </div>
      <div className="cardPic">
            <img src="assets/img/Tourism Image/G_3.jpg" alt="" />
            <div className="shadowOverlay"></div>
            <div className="overlayText">
                    <div className="country">
                            <h1><b>Baharin Visa</b></h1>
                            <p>Satrting from <span style={{color:'orangered'}}>AED 120.00</span></p>
                    </div>
                    <div className="countryLogo">
                            <img src="assets/img/flag/Bahrain.png" alt="" />
                    </div>
            </div>
      </div>
      <div className="cardPic">
                <img src="assets/img/Tourism Image/G_2.jpg" alt="" />
                <div className="shadowOverlay"></div>
                <div className="overlayText">
                        <div className="country">
                                <h1><b>Kuwait Visa</b></h1>
                                <p>Satrting from <span style={{color:'orangered'}}>AED 120.00</span></p>
                        </div>
                        <div className="countryLogo">
                                <img src="assets/img/flag/Kuwait.png" alt="" />
                </div>
        </div>
      </div>
    </div>

    <div className='gobalCards'>
      <div className="cardPic" style={{marginLeft:'15px'}}>
        <img src="assets/img/Tourism Image/G_2.jpg" alt="" />
        <div className="shadowOverlay"></div>
        <div className="overlayText">
                <div className="country">
                        <h1><b>Saudi Arebia Visa</b></h1>
                        <p>Satrting from <span style={{color:'orangered'}}>AED 120.00</span></p>
                </div>
                <div className="countryLogo">
                        <img src="assets/img/flag/Saudi_Arabia.png" alt="" />
                </div>
        </div>
      </div>

      <div className="cardPic">
        <img src="assets/img/Tourism Image/G_4.jpg" alt="" />
        <div className="shadowOverlay"></div>
        <div className="overlayText">
                <div className="country">
                        <h1><b>Singapore Visa</b></h1>
                        <p>Satrting from <span style={{color:'orangered'}}>AED 120.00</span></p>
                </div>
                <div className="countryLogo">
                        <img src="assets/img/flag/Singapore.png" alt="" />
                </div>
        </div>
      </div>

      <div className="cardPic">
        <img src="assets/img/Tourism Image/G_6.jpg" alt="" />
        <div className="shadowOverlay"></div>
        <div className="overlayText">
                <div className="country">
                        <h1><b>Malaysia Visa</b></h1>
                        <p>Satrting from <span style={{color:'orangered'}}>AED 120.00</span></p>
                </div>
                <div className="countryLogo">
                        <img src="assets/img/flag/Malaysia.png" alt="" />
                </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Global
