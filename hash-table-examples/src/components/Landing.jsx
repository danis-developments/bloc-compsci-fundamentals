import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Hash Table Examples</h1>
        <div className="container">
          <ul className="list">
            <li>
              <Link to="/customers">Customers Example</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory Example</Link>
            </li>
            <li>
              <Link to="/newspapers">Newspaper Example</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landing;
