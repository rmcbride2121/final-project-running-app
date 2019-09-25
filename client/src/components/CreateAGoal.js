import React, {Component} from "react";
import MeetPet from "./MeetPet";
import CreateAGoalComponent from "./CreateAGoalComponent";

class CreateAGoal extends Component {
  constructor(props) {
    super(props);
    this.handleClick3 = this.handleClick3.bind(this);
    this.state = {isMeetPetButtonClicked: false};
  }

  handleClick3 = () => {
    this.setState({
      isMeetPetButtonClicked: !this.state.isMeetPetButtonClicked
    });
  }

  render() {
    if (this.state.isMeetPetButtonClicked === true) {
      return <MeetPet />;
    }
    return <CreateAGoalComponent handleClick3={this.handleClick3} />;
  }
      
}

export default (CreateAGoal);
