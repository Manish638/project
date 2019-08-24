import React from "react";

//import Home from "./components/Home";
import Redux from "./components/Redux";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Redux />
      </div>
    );
  }
}

export default App;
