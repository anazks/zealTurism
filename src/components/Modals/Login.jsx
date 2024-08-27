import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './login.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Login(props) {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleToggle = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='headColor'>
          <Modal.Title id="contained-modal-title-vcenter">
            {isRegistering ? 'Register' : 'Login'}
          </Modal.Title>
          {/* Custom Close Button */}
          <Button variant="light" className="close-button" onClick={props.onHide}>
            <span>&times;</span>
          </Button>
        </Modal.Header>

        <Modal.Body>
          <form>
            {isRegistering ? (
              <>
                <div className="form-group">
                  <div className="input-container">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="firstName" 
                      placeholder=" "
                    />
                    <label htmlFor="firstName">First Name</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="mobile" 
                      placeholder=" "
                    />
                    <label htmlFor="mobile">Mobile Number</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-container">
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder=" "
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="form-group">
                  <div className="input-container">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder=" "
                    />
                    <label htmlFor="email">Email Address</label>
                  </div>
                </div>
                <div className='otp'>
                  <h3><b>Login with</b></h3> 
                  <input type="radio" /> Password
                  <input type="radio" /> OTP
                </div>
                <br />
                <div className="form-group">
                  <div className="input-container">
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder=" "
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </>
            )}
          </form>
          <div className='bottomForm'>
            <div><input type="checkbox" /> Remember Me</div>
            <span style={{color:'#015AA9'}}>Forgot password</span>
          </div>
          <br />
          {isRegistering ? (
            <button className="loginButton">REGISTER</button>
          ) : (
            <button className="loginButton">LOGIN</button>
          )}
          <br />
          <br />
          <h4 className='createAc'>
            {isRegistering ? (
              <>
                Already have an account? 
                <span>
                  <b style={{color:'#f97119'}} onClick={handleToggle}> Login</b>
                </span>
              </>
            ) : (
              <>
                Don’t have an account? 
                <span>
                  <b style={{color:'#f97119'}} onClick={handleToggle}> Create</b>
                </span>
              </>
            )}
          </h4>
          {/* Line with Circle */}
          <div className="line-with-circle">
            <div className="circle">OR</div>
          </div>
          <br />
          <br />
          <br />
          <div className='LoginBtn'>
            <button className="fb"> <FaFacebook />
              Login with Facebook
            </button>
            <button className="google"> <FcGoogle />
              Login with Google
            </button>
          </div>
        </Modal.Body>

      </Modal>
    </div>
  );
}

export default Login;
