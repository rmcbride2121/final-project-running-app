import React from "react";

function CreateAGoalComponent(props) {
  return (
    <div className="createAGoal">
      <h1>Create a Goal</h1>
      <p>I want to run...</p>
      <input className="form-control firstInput" placeholder="#" />
      <p>miles by...</p>
      <input className="form-control secondInput" placeholder="Date" />
      <p>and</p>
      <input className="form-control thirdInput" placeholder="Critter Name" />
      <button onClick={props.handleClick3} className="btn btn-primary">Meet Your Critter</button>
    </div>
  );
      
}

export default (CreateAGoalComponent);
