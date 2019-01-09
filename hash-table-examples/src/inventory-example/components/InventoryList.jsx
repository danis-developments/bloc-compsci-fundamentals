import React, { Component } from "react";
import Item from "./Item";

class InventoryList extends Component {
  render() {
    return <React.Fragment>{this.renderItemTable()}</React.Fragment>;
  }

  renderItems = () => {
    const keys = this.props.inventory.hashKeys.sort();
    return keys.map((hashKey, index) => {
      const item = this.props.inventory.lookup(hashKey);
      return (
        <Item
          updateItem={this.props.updateItem}
          item={item}
          index={index}
          inventory={this.props.inventory}
        />
      );
    });
  };

  renderItemTable = () => {
    const tableHead = (
      <thead>
        <tr>
          <th>Item</th>
          <th />
          <th>Quantity (Ea)</th>
          <th>Price ($/Ea)</th>
          <th>Commit / Revert Changes</th>
        </tr>
      </thead>
    );

    const tableBody = <tbody>{this.renderItems()}</tbody>;

    return (
      <div>
        <h2>Shop Inventory</h2>
        <table className="table">
          {tableHead}
          {tableBody}
        </table>
      </div>
    );
  };
}
export default InventoryList;
