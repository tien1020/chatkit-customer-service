import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Customer from "./components/Customer";
import Support from "./components/Support";

import "./normalize.css";
import "./skeleton.css";
import "./App.css";

function App {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Customer />} />
        <Route exact path="/support" render={() => <Support />} />
      
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
