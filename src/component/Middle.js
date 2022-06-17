import React from "react"
import './style.css';
function Middle(){
    return(
        <>
        <div className="divide"></div>
        <div className="easy_login">
          <h2 className="h2">Easy Social Login</h2>
             
          <div className="signupIcon box">
          <img className="googleicon" src="./images/google.png" alt=""></img>
    
          <span className="googleiconText">
              <div className="golgle">
            Sign Up with <strong>Google</strong>
              </div>
          </span>
          </div>
             
          <div id="my-signin2"></div>
        </div><hr/>
        </>
    )
}
export default Middle;