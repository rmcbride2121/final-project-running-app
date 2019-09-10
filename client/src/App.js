import React, { Component } from "react";
import "./App.css";
import critterIcon from "./images/critter-icon.png";

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="app">
        <div className="header">
          <h1>critter</h1><img className="critterIcon" src={critterIcon} />
        </div>
        <button className="btn btn-primary">Create</button>
        <button className="btn btn-primary">View</button>
      </div>
    );
  }
}
export default (App);


