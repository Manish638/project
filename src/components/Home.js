import React from "react";

import "../app.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 21
    };
  }
  ageUp = () => {
    this.setState({
      ...this.state,
      age: ++this.state.age
    });
  };

  ageDown = () => {
    this.setState({
      ...this.state,
      age: --this.state.age
    });
  };

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

export default Home;
