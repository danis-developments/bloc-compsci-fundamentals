import React, { Component } from "react";

class CustomerEntryForm extends Component {
  state = {
    publisher: "",
    date: Date.now(),
    content: ""
  };

  render() {
    return (
      <form>
        <fieldset>
          <legend>Enter Newspaper Data</legend>
          <div className="form-group">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              className="form-control"
              id="publisher"
              placeholder="Enter publisher"
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
          <div className="form-group">
            <label className="form-check-label" htmlFor="content">
              Content
            </label>
            <input
              type="textarea"
              className="form-control"
              id="content"
              value={this.state.content}
              onChange={this.handleContentChange}
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
    const newspaper = {
      publisher: this.state.publisher,
      date: this.state.date,
      content: this.state.content
    };

    if (newspaper.publisher) {
      this.props.addNewspaper(newspaper);
    } else {
      alert("Must have a publisher!");
    }
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  handleDateChange = e => {
    this.setState({ date: e.target.value });
  };

  handlePublisherChange = e => {
    this.setState({ publisher: e.target.value });
  };
}

export default CustomerEntryForm;
