import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Badge
} from "reactstrap";

import Payments from "./Payments";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="nav-item">
            <a className="nav-link" href="/auth/google">
              Login with google
            </a>
          </li>
        );
      default:
        return [
          <NavItem key="1">
            <Payments />
          </NavItem>,
          <NavItem key="2" style={{ margin: "8px 0" }}>
            <Badge color="light">Credits:{this.props.auth.credits}</Badge>
          </NavItem>,
          <NavItem className="nav-item" key="3">
            <a className="nav-link" href="/api/logout">
              Logout
            </a>
          </NavItem>
        ];
    }
  }

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href={this.props.auth ? "/emails" : "/"}>
            Emaily
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.renderContent()}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
