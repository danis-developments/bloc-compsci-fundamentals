import React, { Component } from "react";

class NewspaperList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.renderShowHideNewspapersButton()}
        {this.renderNewspaperTable()}
      </React.Fragment>
    );
  }

  handleShowHideClick = e => {
    e.preventDefault();
    this.props.toggleNewspaperList();
  };

  renderNewspapers = () => {
    const keys = this.props.newspapers.hashKeys;
    return keys.map((hashKey, index) => {
      const newspaper = this.props.newspapers.lookup(hashKey);
      const abstract = newspaper.content.slice(0, 250);
      return (
        <tr key={index}>
          <td>{newspaper.publisher}</td>
          <td>{newspaper.date}</td>
          <td>{abstract}[...]</td>
        </tr>
      );
    });
  };

  renderNewspaperTable = () => {
    const tableHead = (
      <thead>
        <tr>
          <th>Publisher</th>
          <th>Publication Date</th>
          <th>Abstract</th>
        </tr>
      </thead>
    );

    const tableBody = <tbody>{this.renderNewspapers()}</tbody>;

    if (this.props.hideNewspaperList) {
      return (
        <div hidden>
          <h2>newspaper List</h2>
          <table className="table">
            {tableHead}
            {tableBody}
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <h2>newspaper List</h2>
          <table className="table">
            {tableHead}
            {tableBody}
          </table>
        </div>
      );
    }
  };

  renderShowHideNewspapersButton = () => {
    const buttonText = this.props.hideNewspaperList
      ? "Show Newspapers"
      : "Hide Newspapers";
    return (
      <button className="btn btn-primary" onClick={this.handleShowHideClick}>
        {buttonText}
      </button>
    );
  };
}
export default NewspaperList;
