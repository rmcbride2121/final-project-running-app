import React from "react";

function MeetPetComponent(props) {
  return (
    <div className="meetPet">
      meet pet page

      <button onClick={props.LogARunButton}>Log A Run</button>
    </div>
  );
      
}

export default (MeetPetComponent);
