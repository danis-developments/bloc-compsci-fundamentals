import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  state = {
    item: {
      quantity: this.props.item.quantity,
      price: this.props.item.price
    }
  };

  render() {
    return (
      <tr>
        <td>{this.props.item.itemName}</td>
        <td />
        {this.renderQuantity()}
        {this.renderPrice()}
        <td>
          <button
            className="btn btn-primary item-btn"
            onClick={this.commitItemValues}
          >
            Commit
          </button>
          <button
            className="btn btn-primary item-btn"
            onClick={this.cancelItemChanges}
          >
            Revert
          </button>
        </td>
      </tr>
    );
  }

  renderPrice = () => {
    let priceClass = "entry-text right-text";
    if (this.props.item.price !== this.state.item.price) {
      priceClass += " change-text";
    }

    return (
      <td>
        $
        <input
          className={priceClass}
          type="number"
          step="0.01"
          min="0"
          max="9999"
          value={this.state.item.price}
          onChange={this.handlePriceChange}
        />
      </td>
    );
  };

  renderQuantity = () => {
    let quantityClass = "entry-text right-text";
    if (this.props.item.quantity !== this.state.item.quantity) {
      quantityClass += " change-text";
    }

    return (
      <td>
        <input
          className={quantityClass}
          type="number"
          min="0"
          max="9999"
          step="1"
          value={this.state.item.quantity}
          onChange={this.handleQuantityChange}
        />
      </td>
    );
  };

  handleQuantityChange = e => {
    this.setState({
      item: {
        quantity: e.target.value,
        price: this.state.item.price
      }
    });
  };

  handlePriceChange = e => {
    this.setState({
      item: {
        quantity: this.state.item.quantity,
        price: e.target.value
      }
    });
  };

  cancelItemChanges = e => {
    this.setState({
      item: { quantity: this.props.item.quantity, price: this.props.item.price }
    });
  };

  commitItemValues = e => {
    let newItem = {
      itemName: this.props.item.itemName,
      quantity: this.state.item.quantity,
      price: this.state.item.price
    };
    this.props.updateItem(newItem);
  };
}

export default Item;
