import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./design/composeButton.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h5 className="text-center">Sent mails</h5>
        </div>
        <Link className="compose" to="/emails/new">
          +
        </Link>
      </div>
    );
  }
}

export default Dashboard;
