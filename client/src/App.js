import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Customer from "./components/Customer";
import Support from "./components/Support";

import "./normalize.css";
import "./skeleton.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Customer />} />
        <Route exact path="/support" render={() => <Support />} />
      
      </Switch>
      <FooterBottom></FooterBottom>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
