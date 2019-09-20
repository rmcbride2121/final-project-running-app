import React, {Component} from "react";
import LogIn from "./LogIn";
import HomePage from "./HomePage";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isLogInButtonClicked: false};
  }

  handleClick = () => {
    this.setState( {
      isLogInButtonClicked: !this.state.isLogInButtonClickeds
    });
  }

  render() {

    if (this.state.isLogInButtonClicked === true) {
      return <LogIn />;
    } 
    return <HomePage handleClick={this.handleClick} />;
    
  }
}

export default Main;
