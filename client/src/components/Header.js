import React from "react";
import critterIcon from "../images/critter-head.png";

function Header() {
      
  return (
    <div className="header">
      <h1 className="title">critter</h1><img className="critterIcon" src={critterIcon} />
    </div>
  );
  
}

export default (Header);
