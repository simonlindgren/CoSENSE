import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import MetisMenu from "react-metismenu";

import { SwedenNav } from "./NavItems";

class Nav extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h5 className="app-sidebar__heading">Sweden</h5>
        <MetisMenu
          content={SwedenNav}
          activeLinkFromLocation
          className="vertical-nav-menu"
          iconNamePrefix=""
          classNameStateIcon="pe-7s-angle-down"
        />
      </React.Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
