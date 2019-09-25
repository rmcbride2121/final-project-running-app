import React, {Component} from "react";
import LogARun from "./LogARun";
import MeetPetComponent from "./MeetPetComponent";

class MeetPet extends Component {
  constructor(props) {
    super(props);
    this.LogARunButton = this.LogARunButton.bind(this);
    this.state = {isLogARunPageClicked: false};
  }

  LogARunButton = () => {
    this.setState({
      isLogARunPageClicked: !this.state.isLogARunPageClicked
    });
  }

  render() {
    if (this.state.isLogARunPageClicked === true) {
      return <LogARun LogARunButton={this.LogARunButton} />;
    }
    return <MeetPetComponent LogARunButton={this.LogARunButton} />;
  }
      
}

export default (MeetPet);
