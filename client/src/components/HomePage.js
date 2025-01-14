import React from "react";
import critterPlant from "../images/critter-plant-icon.png";

function HomePage(props) {
  return (
    <div className="main">
      <img className="critterPlant" src={critterPlant} />
      <p>Start running, stay motivated, and meet goals to help your pet thrive!</p>
      <input className="form-control" placeholder="Enter Your Email Address" />
      <input className="form-control" placeholder="Create a Password" />
      <button onClick={props.handleClick2} className="btn btn-primary">Create Your Goal</button>
      <div className="sign-in">
        <i><p>Already have an account?</p></i>
        <button onClick={props.handleClick} className="btn btn-primary">Sign in</button>
      </div>
    </div>
  );
}

export default HomePage;
