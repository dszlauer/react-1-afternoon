import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(value) {}
  onClick() {}

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" />
        <button className="confirmationButton">Check</button>
        <span className="resultsBox" />
      </div>
    );
  }
}
