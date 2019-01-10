import React, { Component } from "react";

class FindNewspaperForm extends Component {
  state = {
    newspaperFound: "No Newspaper Selected",
    newspaperData: null,
    publisher: "",
    date: Date.now()
  };

  render() {
    console.log(this.state.phone);
    return (
      <div>
        <form>
          <fieldset>
            <legend>Find Newspaper</legend>
            <div className="form-group">
              <label htmlFor="publisher">Publisher</label>
              <input
                type="text"
                className="form-control"
                id="publisher"
                placeholder="Enter Publisher"
                value={this.state.publisher}
                onChange={this.handlePublisherChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="publicationDate">Publication Date</label>
              <input
                type="date"
                className="form-control"
                id="publicationDate"
                value={this.state.date}
                onChange={this.handleDateChange}
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
        {this.renderNewspaperData()}
      </div>
    );
  }

  handleFind = e => {
    e.preventDefault();
    const newspaper = this.props.newspapers.lookup(
      this.state.publisher + this.state.date
    );
    if (!newspaper) {
      this.setState({
        newspaperFound:
          "Newspaper " +
          this.state.publisher +
          " from date " +
          this.state.date +
          " Not Found",
        newspaperData: null
      });
    } else {
      this.setState({
        newspaperFound: "Newspaper Found!",
        newspaperData: newspaper
      });
    }
  };

  handlePublisherChange = e => {
    this.setState({ publisher: e.target.value });
  };

  handleDateChange = e => {
    console.log(e.target.value);
    this.setState({ date: e.target.value });
  };

  renderNewspaperData = () => {
    if (this.state.newspaperData == null) {
      return (
        <div>
          <p>{this.state.newspaperFound}</p>
        </div>
      );
    }
    return (
      <div>
        <p>{this.state.newspaperFound}</p>
        <p>Publisher: {this.state.newspaperData.publisher}</p>
        <p>Publication Data: {this.state.newspaperData.date}</p>
        <p>{this.state.newspaperData.content.slice(0, 250)}[...]</p>
      </div>
    );
  };
}

export default FindNewspaperForm;
