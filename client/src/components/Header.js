import React, { Component } from "react";
import critterIcon from "../images/critter-head.png";

class Header extends Component {
  constructor() {
    super();
  }
      
  render() {
    return (
      <div className="header">
        <h1 className="title">critter</h1><img className="critterIcon" src={critterIcon} />
      </div>
    );
  }
}

export default (Header);
