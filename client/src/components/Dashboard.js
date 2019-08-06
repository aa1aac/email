import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <div className="fixed-action-btn">
          <Link className="btn-floating btn-large red" to="/emails/new">
            <i className="large material-icons">+</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Dashboard;
