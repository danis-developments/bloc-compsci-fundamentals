import React, { Component } from "react";
import formatPhoneNumber from "../modules/formatPhoneNumber";

class CustomerEntryForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };

  render() {
    return (
      <form>
        <fieldset>
          <legend>Create New Customer</legend>
          <div className="form-group">
            <label htmlFor="customerName">Customer Name</label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              placeholder="Enter full name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="phone"
              className="form-control"
              id="phoneNumber"
              placeholder="(123)456-7890"
              value={this.state.phone}
              onChange={this.handlePhoneChange}
            />
          </div>
          <div className="form-group">
            <label className="form-check-label" htmlFor="address">
              Address
            </label>
            <input
              type="textarea"
              className="form-control"
              id="address"
              value={this.state.address}
              onChange={this.handleAddressChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </fieldset>
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const customer = {
      name: this.state.name,
      phone: formatPhoneNumber(this.state.phone),
      address: this.state.address
    };

    console.log(this.state.phone);
    console.log(customer.phone);
    if (customer.phone) {
      this.props.addCustomer(customer);
    } else {
      alert("invalid phone number");
    }
  };

  handleAddressChange = e => {
    this.setState({ address: e.target.value });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handlePhoneChange = e => {
    this.setState({ phone: e.target.value });
  };
}

export default CustomerEntryForm;
