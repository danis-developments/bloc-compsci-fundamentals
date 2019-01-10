import React, { Component } from "react";
import NewspaperEntryForm from "./components/NewspaperEntryForm";
import NewspapersList from "./components/NewspapersList";
import getNewspapers from "./data/newspapers";
import HashTable from "./modules/HashTable";
import FindNewspaperForm from "./components/FindNewspaperForm";

class NewspapersExampleApp extends Component {
  state = {
    newspapers: new HashTable(1),
    hideNewspapersList: true
  };

  componentDidMount() {
    const rawNewspapers = getNewspapers();
    let newspapersHash = new HashTable(rawNewspapers.length * 2);
    rawNewspapers.map(newspaper =>
      newspapersHash.add(newspaper.publisher + newspaper.date, newspaper)
    );
    this.setState({ newspapers: newspapersHash });
  }

  render() {
    return (
      <div className="App">
        <NewspaperEntryForm addNewspaper={this.addNewspaper} />
        <FindNewspaperForm newspapers={this.state.newspapers} />
        <NewspapersList
          newspapers={this.state.newspapers}
          hideNewspaperList={this.state.hideNewspaperList}
          toggleNewspaperList={this.toggleNewspaperList}
        />
      </div>
    );
  }

  addNewspaper = newspaper => {
    let newNewspaperHash = this.state.newspapers.clone();
    newNewspaperHash.add(newspaper.publisher + newspaper.date, newspaper);
    this.setState({ newspapers: newNewspaperHash });
  };

  toggleNewspaperList = () => {
    this.setState({ hideNewspaperList: !this.state.hideNewspaperList });
  };
}

export default NewspapersExampleApp;
