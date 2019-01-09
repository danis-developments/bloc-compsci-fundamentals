import React, { Component } from "react";
import ItemEntryForm from "./components/ItemEntryForm";
import InventoryList from "./components/InventoryList";
import getInventory from "./data/inventory";
import HashTable from "./modules/HashTable";

class InventoryExampleApp extends Component {
  state = {
    inventory: new HashTable(10)
  };

  componentDidMount() {
    const rawInventory = getInventory();
    let inventoryHash = new HashTable(rawInventory.length * 2);
    rawInventory.map(item => inventoryHash.add(item.itemName, item));
    this.setState({ inventory: inventoryHash });
  }

  render() {
    return (
      <div className="App container">
        <ItemEntryForm addItem={this.addItem} />
        <InventoryList
          updateItem={this.updateItem}
          inventory={this.state.inventory}
        />
      </div>
    );
  }

  addItem = item => {
    let newItemHash = this.state.inventory.clone();
    newItemHash.add(item.itemName, item);
    this.setState({ inventory: newItemHash });
  };

  updateItem = item => {
    let newItemHash = this.state.inventory.clone();
    const updateSuccessful = newItemHash.update(item.itemName, item);
    if (updateSuccessful) {
      this.setState({ inventory: newItemHash });
    }
    return updateSuccessful;
  };
}

export default InventoryExampleApp;
