import React from "react"
import './style.css';
function Content(){
return(
<div>
    <div className="Area">
      <div className="formArea">
        <h2 className="Login">Login With E-mail</h2>
        <form className="form">
          <div className="row">
            <div className="col">
              <input
                type="email"
                className=""
                placeholder="Enter Your Email*"
              />
            </div>
            <div className="col">
              <input type="password" placeholder="Enter Your Password*" />
            </div>
          </div>
          <div className="row">
            <div className="col-login">
              <button type="button" className="btn button">
                LOGIN
              </button>
            </div>
            <div className="col-forgot">
              <span href="">Forgot Password ?</span>
            </div>
          </div>
        </form>
        <p className="inputback">
          {"<<"} Back
        </p>
      </div>
    </div>  
  </div>

)
}
export default Content;