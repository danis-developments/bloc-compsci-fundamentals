import React, { Component } from "react";
import formatPhoneNumber from "../modules/formatPhoneNumber";

class FindCustomerForm extends Component {
  state = {
    customerFound: "No Customer Selected",
    customerData: null,
    phone: ""
  };

  render() {
    console.log(this.state.phone);
    return (
      <div>
        <form>
          <fieldset>
            <legend>Find Customer</legend>
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
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleFind}
            >
              Find
            </button>
          </fieldset>
        </form>
        {this.renderCustomerData()}
      </div>
    );
  }

  handleFind = e => {
    e.preventDefault();
    const formattedPhoneNumber = formatPhoneNumber(this.state.phone);
    const customer = this.props.customers.lookup(formattedPhoneNumber);
    if (!customer) {
      this.setState({
        customerFound: "Customer " + formattedPhoneNumber + " Not Found"
      });
    }

    this.setState({
      customerData: customer,
      phone: formatPhoneNumber(this.state.phone)
    });
  };

  handlePhoneChange = e => {
    this.setState({ phone: e.target.value });
  };

  renderCustomerData = () => {
    if (this.state.customerData == null) {
      return (
        <div>
          <p>{this.state.customerFound}</p>
          <p />
          <p />
        </div>
      );
    }
    return (
      <div>
        <p>{this.state.customerData.name}</p>
        <p>{this.state.customerData.phone}</p>
        <p>{this.state.customerData.address}</p>
      </div>
    );
  };
}

export default FindCustomerForm;
