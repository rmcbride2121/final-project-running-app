import React, {Component} from "react";
import Header from "./Header";
import Header2 from "./Header2";
import LogIn from "./LogIn";
import HomePage from "./HomePage";
import CreateAGoal from "./CreateAGoal";

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.state = {isLogInButtonClicked: true};
    this.state = {isMeetPetButtonClicked: false};
  }

  handleClick = () => {
    this.setState({
      isLogInButtonClicked: !this.state.isLogInButtonClicked
    });
  }

  handleClick2 = () => {
    this.setState({
      isMeetPetButtonClicked: !this.state.isMeetPetButtonClicked
    });
  }

  render() {

    if (this.state.isLogInButtonClicked === true) {
      return (
        <div className="App">
          <Header2 />
          <LogIn handleClick2={this.handleClick2} />
        </div>
      );
    } else if (this.state.isMeetPetButtonClicked === true) {
      return (
        <div className="App">
          <Header2 />
          <CreateAGoal />
        </div>
      );
    }
    return (
      <div className="App">
        <Header />
        <HomePage handleClick={this.handleClick} handleClick2={this.handleClick2} />
      </div>
    );
    
  }
}

export default Main;

