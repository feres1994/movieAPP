import React from "react";
import Search from "./Search";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        This is My header
        <Search getF={this.props.getF} />
      </div>
    );
  }
}

export default Header;
