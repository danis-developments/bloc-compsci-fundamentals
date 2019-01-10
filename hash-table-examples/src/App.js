import React, { Component } from "react";
import { Route } from "react-router-dom";
import CustomersExampleApp from "./customer-example/CustomersExampleApp";
import Landing from "./components/Landing";
import InventoryExampleApp from "./inventory-example/InventoryExampleApp";
import NewspapersExampleApp from "./newspaper-example/NewspapersExampleApp";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/customers" component={CustomersExampleApp} />
        <Route path="/inventory" component={InventoryExampleApp} />
        <Route path="/newspapers" component={NewspapersExampleApp} />
      </div>
    );
  }
}

export default App;
