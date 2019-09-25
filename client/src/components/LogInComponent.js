import React from "react";

function LogInComponent(props) {
  return (
    <div className="login">
      <h1>Sign In</h1>
      <input className="form-control" value="Enter Your Email Address" />
      <input className="form-control" value="Create a Password" />
      <button onClick={props.handleClick2} className="btn btn-primary">Meet Your Critter</button>
    </div>
  );
      
}

export default (LogInComponent);
