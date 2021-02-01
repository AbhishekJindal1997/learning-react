import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <div>
        <i
          className={this.getLikeClasses()}
          aria-hidden='true'
          onClick={this.props.onClick}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }

  getLikeClasses() {
    let classes = "fa fa-heart";
    classes += !this.props.liked ? "-o" : "";
    return classes;
  }
}

export default Like;
