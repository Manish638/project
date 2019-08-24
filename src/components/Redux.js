import React from "react";
import "../app.css";

import connect from "react-redux";

class Redux extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>Age: {this.state.age}</h1>
        <button onClick={this.ageUp}>AgeUp</button>{" "}
        <button onClick={this.ageDown}>AgeDown</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispach => {
  return {
    ageUp: () => dispach({ type: "Age_Up" }),
    ageDown: () => dispach({ type: "Age_Down" })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Redux);
