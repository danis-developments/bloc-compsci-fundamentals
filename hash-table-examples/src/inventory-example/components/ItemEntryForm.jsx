import React, { Component } from "react";

class ItemEntryForm extends Component {
  state = {
    itemName: "",
    quantity: "",
    price: ""
  };

  render() {
    return (
      <form>
        <fieldset>
          <legend>Add New Item</legend>
          <div className="form-group">
            <label htmlFor="itemName">Item Name</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              placeholder="Enter item name"
              value={this.state.itemName}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemQuantity">Quantity (Ea)</label>
            <input
              type="number"
              min="0"
              max="9999"
              step="1"
              className="form-control"
              id="itemQuantity"
              placeholder="Enter quantity on hand"
              value={this.state.quantity}
              onChange={this.handleQuantityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="itemPrice">Price ($/Ea)</label>
            <input
              type="number"
              min="0"
              max="9999"
              step="0.01"
              className="form-control"
              id="itemPrice"
              placeholder="Enter item price"
              value={this.state.price}
              onChange={this.handlePriceChange}
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
    const item = {
      itemName: this.state.itemName,
      quantity: this.state.quantity,
      price: this.state.price
    };
    const errMsg = "YOU MUST ENTER AN ITEM NAME";
    if (item.itemName && item.itemName !== errMsg) {
      this.props.addItem(item);
    } else {
      this.setState({ itemName: errMsg });
    }
  };

  handleNameChange = e => {
    this.setState({ itemName: e.target.value });
  };

  handlePriceChange = e => {
    this.setState({ price: e.target.value });
  };

  handleQuantityChange = e => {
    this.setState({ quantity: e.target.value });
  };
}

export default ItemEntryForm;
