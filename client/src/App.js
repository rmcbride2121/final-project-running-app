import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import LogIn from "./components/LogIn";



class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {isLogInButtonClicked: false};
  }
  
  handleClick() {
    this.setState( {
      isLogInButtonClicked: true
    });
  }

  render() {
    let loginButton;

    if (this.state.isLogInButtonClicked === true) {
      loginButton = <LogIn />;
    } else {
      loginButton = <Main handleClick={this.handleClick} />;
    }

    return (
      <div className="App">
        <Header />
        {loginButton}
      </div>
    );
  }
}
export default (App);


