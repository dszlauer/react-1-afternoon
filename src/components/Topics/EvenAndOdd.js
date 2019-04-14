import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }

  assignEvenAndOdds(userInput) {
    const arr = userInput.split(",");
    const evens = [];
    const odds = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(parseInt(arr[i], 10));
      } else if (arr[i] % 2 !== 0) {
        odds.push(parseInt(arr[i]));
      }
    }
    this.setState({ evenArray: evens, oddArray: odds });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4 />
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}>
          Split
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
