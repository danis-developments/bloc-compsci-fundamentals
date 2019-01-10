import React, { Component } from "react";

class FindNewspaperForm extends Component {
  state = {
    newspaperFound: "No Newspaper Selected",
    newspaperData: null,
    publisher: "",
    publicationDate: null
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
    /*    e.preventDefault();
    const formattedPhoneNumber = formatPhoneNumber(this.state.phone);
    const newspaper = this.props.newspapers.lookup(formattedPhoneNumber);
    if (!newspaper) {
      this.setState({
        newspaperFound: "Newspaper " + formattedPhoneNumber + " Not Found"
      });
    }

    this.setState({
      newspaperData: newspaper,
      phone: formatPhoneNumber(this.state.phone)
    });*/
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
          <p />
          <p />
        </div>
      );
    }
    return (
      <div>
        <p>{this.state.newspaperData.name}</p>
        <p>{this.state.newspaperData.phone}</p>
        <p>{this.state.newspaperData.address}</p>
      </div>
    );
  };
}

export default FindNewspaperForm;
