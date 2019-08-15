import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import NewMail from "./NewMail";
import AuthExample from "./protectedroutePractice";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedin: false };
  }

  componentDidMount() {
    this.props.fetchUser();
    console.log(this.props.fetchUser());
    axios.get("/api/current_user").then(res => {
      if (res.data) {
        this.setState({ isLoggedin: Boolean });
      }
      console.log(res.data);
      console.log(Boolean(res.data));
    });
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
            <Route path="/practice" component={AuthExample} />
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
