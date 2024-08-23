import React from 'react'
import   './Header.css'
function Header() {
  return (
    <div className='navMain'>
        <div className="head">
            <div className="logoContents">
                        <ul>
                            <li><img src="./logo_.png" alt="" className='logo'/></li>
                        </ul>
                        <div class="header-social-icon">
                        <ul class="nav" >
                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/FacebookLogo.png"/></a></li>
                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/InstagramLogo.png"/></a></li>
                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/TwitterLogo.png"/></a></li>
                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/WhatsappLogo.png"/></a></li>
                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/YoutubeLogo.png"/></a></li>
                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/LinkedinLogo.png"/></a></li>
                            <li className="nav-item"><a href="javascript:void(0);" className="nav-link"><img src="assets/img/Icons/PinterestLogo.png"/></a></li>
                        </ul>
                    </div>
                 
            </div>
            <div className="headRight">
            <div className='headRightOptions'>
                <div className='flagBox'>
                    <img src="assets/img/flag/united-arab-emirates.png" className="flag-icon" alt="UAE Flag"/>
                </div>
                <div className="currencyDropdown">
                    <span>AED <i className="fa-solid fa-angle-down"></i></span>
                    <ul className="dropdown-menu" aria-labelledby="dropdown09">
                    <li className="dropdown-item"><a href="#fr"><span className="flag-icon"><img src="assets/img/flag/USD.png" alt="USD"/>USD</span> </a></li>
                    <li className="dropdown-item"><a href="#it"><span className="flag-icon"><img src="assets/img/flag/IND.png" alt="INR"/>INR</span> </a></li>
                    </ul>
                </div>
                <div className='loginBox'>
                        <span className="user-pic"><img src="assets/img/No_user.png"/></span>  
                        <span>Login</span>
                        
                </div>
                <div>
                <a href="javascript:void(0);" className="nav-link" id="waht-call" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/img/Icons/WhtsaapCall.png" className='wpImg'/></a>
                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="waht-call">
                                        <a class="dropdown-item" href="tel:+9719876543210">+971 9876 543 210</a>
                                        <a class="dropdown-item" href="tel:+9719876543211">+971 9876 543 211</a>
                                    </div>
                </div>
            </div>

                   
            </div>
            <div className="headTop">
            
            </div>
        </div>
        <div className='navBottom'>
                        <ul>
                            <li class="nav-item ">
                                < a href="index.html" className="nav-link active"> Home</a>
                            </li>
                            <li class="nav-item">
                                    <a href="Tours_grid.html" className="nav-link">Delightful Tours</a>
                            </li>
                            <li class="nav-item">
                                    <a href="Holyday_grid_view.html" className="nav-link">Exciting Holidays</a>
                            </li>
                            <li class="nav-item">
                                    <a href="Hotels_grid_view.html" className="nav-link">Best Hotels</a>
                            </li>
                            <li class="nav-item">
                                <a href="Customize_holidays.html" className="nav-link">Customize Holidays</a>
                            </li>
                            <li class="nav-item">
                                <a href="Umrah_grid_view.html" className="nav-link">Umarah For All</a>
                            </li>
                            <li class="nav-item">
                                <a href="Transfers_grid_view.html" className="nav-link">Transfer</a>
                            </li>
                            <li class="nav-item">
                                 <a href="Special_Deals.html" className="nav-link">Special Deals</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">Visa</a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="Visa.html">Global Visa Services</a>
                            <a class="dropdown-item" href="Visa_Change-.html">Visa Change – UAE</a>
                            <a class="dropdown-item" href="Visa_review.html">Check Visa Status</a>
                            </div>
                                    </li>
                            <li class="nav-item">
                                 <a href="Special_Deals.html" className="nav-link">Insurance</a>
                            </li>
                            <li class="nav-item">
                                 <a href="Special_Deals.html" className="nav-link">Forex</a>
                            </li>
                            <li class="nav-item dropdown d-none d-lg-flex">
                              <a class="nav-link dropdown-toggle " href="javascript:void(0);" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bars"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="About_us.html">About Us</a>
                                <a class="dropdown-item" href="contact_us.html">Contact Us</a>
                                <a class="dropdown-item" href="Branches.html">Branches</a>
                                <a class="dropdown-item" href="blog.html">Blog</a>
                                <a class="dropdown-item" href="Careers.html">Careers</a>
                              </div>
                            </li>
                        </ul>
        </div>
    </div>
  )
}

export default Header