import React, { Component } from "react";
import CustomerEntryForm from "./components/CustomerEntryForm";
import CustomerList from "./components/CustomerList";
import getCustomers from "./data/customers";
import HashTable from "./modules/HashTable";
import FindCustomerForm from "./components/FindCustomerForm";

class CustomersExampleApp extends Component {
  state = {
    customers: new HashTable(1),
    hideCustomerList: true
  };

  componentDidMount() {
    const rawCustomers = getCustomers();
    let customersHash = new HashTable(rawCustomers.length * 2);
    rawCustomers.map(customer => customersHash.add(customer.phone, customer));
    this.setState({ customers: customersHash });
  }

  render() {
    return (
      <div className="App">
        <CustomerEntryForm addCustomer={this.addCustomer} />
        <FindCustomerForm customers={this.state.customers} />
        <CustomerList
          customers={this.state.customers}
          hideCustomerList={this.state.hideCustomerList}
          toggleCustomerList={this.toggleCustomerList}
        />
      </div>
    );
  }

  addCustomer = customer => {
    let newCustomerHash = this.state.customers.clone();
    newCustomerHash.add(customer.phone, customer);
    this.setState({ customers: newCustomerHash });
  };

  toggleCustomerList = () => {
    this.setState({ hideCustomerList: !this.state.hideCustomerList });
  };
}

export default CustomersExampleApp;
