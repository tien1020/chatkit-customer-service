import { Route } from "react-router-dom";
import React, { Component } from "react";
import Customer from "./components/Customer";
import Support from "./components/Support";

import "./normalize.css";
import "./skeleton.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Customer />} />
        <Route exact path="/support" render={() => <Support />} />
      </div>
    );
  }
}

export default App;
