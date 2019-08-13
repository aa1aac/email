import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./design/composeButton.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentContents: ""
    };
  }
  componentDidMount() {
    axios.get("/api/sent").then(res => {
      this.setState({ sentContents: res.data });
    });
  }

  render() {
    const DisplayContent = () => {
      if (this.state.sentContents) {
        let mails = [];
        this.state.sentContents.forEach(element => {
          mails.push(
            <div className="container">
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">
                    Subject: {element.subject}
                    <br />
                    Recipient: {element.recipient}
                    <div className="text-right">
                      DateSent: {new Date(element.dateSent).toString()}
                    </div>
                  </p>
                </div>
              </div>
              <br />
            </div>
          );
        });

        return <div className="container">{mails}</div>;
      }
      return (
        <div>
          <div className="text-center">No mail sent so far</div>
        </div>
      );
    };
    return (
      <div>
        <div className="container">
          <h5 className="text-center">Sent mails</h5>
        </div>
        <DisplayContent />
        <Link className="compose" to="/emails/new">
          +
        </Link>
      </div>
    );
  }
}

export default Dashboard;
