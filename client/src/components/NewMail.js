import React, { Component } from "react";
import axios from "axios";

class NewMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: "",
      subject: "",
      body: ""
    };
  }

  changeHandeler = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit(event) {}
  render() {
    return (
      <div className="container">
        <h4 className="text-center">Compose</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipient">recipient</label>
            <input
              required
              type="email"
              className="form-control"
              id="recipient"
              aria-describedby="recipient"
              placeholder="Enter recipient"
              value={this.state.recipient}
              name="recipient"
              onChange={this.changeHandeler}
            />
            <small id="recipient" className="form-text text-muted">
              Enter the recipient
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="subject">subject</label>
            <input
              required
              type="text"
              className="form-control"
              id="subject"
              aria-describedby="subject"
              placeholder="subject"
              value={this.state.subject}
              onChange={this.changeHandeler}
              name="subject"
            />
          </div>
          <div className="form-group">
            <label htmlFor="body">body</label>
            <textarea
              required
              type="text"
              value={this.state.body}
              className="form-control"
              id="body"
              aria-describedby="body"
              placeholder="content"
              onChange={this.changeHandeler}
              name="body"
            />
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewMail;
