import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isLogInButtonClicked: false};
  }
  
  handleClick() {
    this.setState( {
      isLogInButtonClicked: true
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main handleClick={this.handleClick}/>
      </div>
    );
  }
}
export default (App);


