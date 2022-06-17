import React from "react";
import './style.css';
function Body(){
    return(
        <div className="header">
        <div>
          <img className="logo" src="./images/logo.png" alt=""></img>
        </div>
        <div className='heading'>
          <div>
            <h1 className="welcome">Welcome to Cedcommerce!</h1>
            <h3 className="unlimited">Sign in for unlimited access</h3>
          </div>
          <div><img className="Key" src="./images/hero-img.png" alt=""></img></div>
        </div>
        
      </div>
    )
}
export default Body;