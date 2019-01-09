import React, { Component } from "react";
import { Route } from "react-router-dom";
import CustomersExampleApp from "./customer-example/CustomersExampleApp";
import Landing from "./components/Landing";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/customers" component={CustomersExampleApp} />
        <Route path="/inventory" component={CustomersExampleApp} />
        <Route path="/newspapers" component={CustomersExampleApp} />
      </div>
    );
  }
}

export default App;
