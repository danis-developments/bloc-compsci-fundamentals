import React, { Component } from "react";
import ItemEntryForm from "./components/ItemEntryForm";
import InventoryList from "./components/InventoryList";
import getInventory from "./data/inventory";
import HashTable from "./modules/HashTable";

class InventoryExampleApp extends Component {
  state = {
    inventory: new HashTable(10),
    updateList: false
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
        <ItemEntryForm
          updateList={this.state.updateList}
          setUpdateList={this.setUpdateList}
          addItem={this.addItem}
        />
        <InventoryList
          updateItem={this.updateItem}
          inventory={this.state.inventory}
          setUpdateList={this.setUpdateList}
          updateList={this.state.updateList}
        />
      </div>
    );
  }

  addItem = item => {
    let newItemHash = this.state.inventory.clone();
    newItemHash.add(item.itemName, item);
    this.setState({ inventory: newItemHash, updateList: true });
  };

  updateItem = item => {
    let newItemHash = this.state.inventory.clone();
    const updateSuccessful = newItemHash.update(item.itemName, item);
    if (updateSuccessful) {
      this.setState({ inventory: newItemHash });
    }
    return updateSuccessful;
  };

  setUpdateList = bool => {
    this.setState({ updateList: bool });
  };
}

export default InventoryExampleApp;
