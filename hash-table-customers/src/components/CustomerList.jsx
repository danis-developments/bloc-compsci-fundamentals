import React, { Component } from "react";

class CustomerList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.renderShowHideCustomersButton()}
        {this.renderCustomerTable()}
      </React.Fragment>
    );
  }

  handleShowHideClick = e => {
    e.preventDefault();
    this.props.toggleCustomerList();
  };

  renderCustomers = () => {
    const keys = this.props.customers.hashKeys;
    return keys.map((hashKey, index) => {
      const customer = this.props.customers.lookup(hashKey);
      return (
        <tr key={index}>
          <td>{customer.name}</td>
          <td>{customer.phone}</td>
          <td>{customer.address}</td>
        </tr>
      );
    });
  };

  renderCustomerTable = () => {
    const tableHead = (
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
      </thead>
    );

    const tableBody = <tbody>{this.renderCustomers()}</tbody>;

    if (this.props.hideCustomerList) {
      return (
        <div hidden>
          <h2>Customer List</h2>
          <table className="table">
            {tableHead}
            {tableBody}
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Customer List</h2>
          <table className="table">
            {tableHead}
            {tableBody}
          </table>
        </div>
      );
    }
  };

  renderShowHideCustomersButton = () => {
    const buttonText = this.props.hideCustomerList
      ? "Show Customer List"
      : "Hide Customer List";
    return (
      <button className="btn btn-primary" onClick={this.handleShowHideClick}>
        {buttonText}
      </button>
    );
  };
}
export default CustomerList;
