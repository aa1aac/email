import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import NewMail from "./NewMail";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/emails" component={Dashboard} />
            <Route path="/emails/new" component={NewMail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
