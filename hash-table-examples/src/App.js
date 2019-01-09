import React, { Component } from "react";
import { Route } from "react-router-dom";
import CustomersExampleApp from "./customer-example/CustomersExampleApp";
import Landing from "./components/Landing";
import InventoryExampleApp from "./inventory-example/InventoryExampleApp";

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path="/customers" component={CustomersExampleApp} />
        <Route path="/inventory" component={InventoryExampleApp} />
        <Route path="/newspapers" component={CustomersExampleApp} />
      </div>
    );
  }
}

export default App;
