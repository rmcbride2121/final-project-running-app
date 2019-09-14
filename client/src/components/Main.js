import React, { Component } from "react";
import critterPlant from "../images/critter-plant-icon.png";

class Main extends Component {
    constructor() {
        super();
      }
      
      render() {
        return (
            <div className="main">
                <img className="critterPlant" src={critterPlant} />
                <p>Start running, stay motivated, and meet goals to help your pet thrive!</p>
                <input className="form-control" value="Enter Your Email Address"></input>
                <input className="form-control" value="Create a Password"></input>
                <button className="btn btn-primary">Meet your pet</button>
                <div className="sign-in">
                    <p>Already have an account?</p><button onClick={this.handleClick} className="btn btn-primary">Sign in</button>
                </div>
        </div>
        )
      }
}

export default (Main);