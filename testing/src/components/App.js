import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return <button>Sign Out</button>;
    } else {
      return <button>Sign In</button>;
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Outlet />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(App);
