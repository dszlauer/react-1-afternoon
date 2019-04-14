import React, { Component } from "react";

export default class FilterString extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredNames: []
    };
  }

  handleChange(value) {
    this.setState({ userInput: value });
  }

  filteredNames() {
    console.log("State", this.sate);
    const { names, userInput } = this.state;
    const newArr = [];
    for (let i = 0; i < names.length; i++) {
      if (names[i].includes(userInput)) {
        newArr.push(names[i]);
      }
    }
    this.setState({ filteredNames: newArr });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names: {JSON.stringify(this.state.names, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filteredNames(this.state.value)}>
          Filter
        </button>
        <span className="resultsBox FilterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
