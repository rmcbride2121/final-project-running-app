import React from "react";

function MeetPetComponent(props) {
  return (
    <div className="meetPet">
      meet pet page

      <button onClick={props.LogARunButton} className="btn btn-primary">Log A Run</button>
    </div>
  );
      
}

export default (MeetPetComponent);
