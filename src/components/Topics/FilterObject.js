import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],
      userInput: "",
      filteredArray: []
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  filterEmployees() {
    console.log(this.state);
    const { employees, userInput } = this.state;
    const newArr = [];
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(userInput)) {
        newArr.push(employees[i]);
      }
    }
    this.setState({ filteredArray: newArr });
  }

  render() {
    const { employees, filteredArray } = this.state;
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Objects</h4>
        <span className="puzzleText">
          Original: {JSON.stringify(employees, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterEmployees()}>
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
