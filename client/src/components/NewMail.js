import React, { Component } from "react";
import axios from "axios";

class NewMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: "",
      subject: "",
      body: "",
      message: null,
      spinner: false
    };
  }

  changeHandeler = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    this.setState({ spinner: true });
    axios
      .post("/api/send", {
        recipient: this.state.recipient,
        subject: this.state.subject,
        body: this.state.body
      })
      .then(res => {
        if (res.data.error) {
          this.setState({ message: res.data.error });
        }
      });
    this.setState({ spinner: false });
    event.preventDefault();
  };

  render() {
    const DisplayAlert = () => {
      if (this.state.message) {
        return (
          <div>
            <br />
            <div className="alert alert-primary" role="alert">
              {this.state.message}
            </div>
          </div>
        );
      }
      return <div />;
    };

    const Spinner = () => {
      if (this.state.spinner) {
        return (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Sending...</span>
          </div>
        );
      }
      return null;
    };
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>{" "}
          <Spinner />
          <br />
          <DisplayAlert />
        </form>
      </div>
    );
  }
}

export default NewMail;
