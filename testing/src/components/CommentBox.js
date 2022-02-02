import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };

  //component just got rendered
  componentDidMount() {
    this.shouldNavigateAway();
  }

  //component just got updated
  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      console.log("FUCK");
    }
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //call an action creator and save comment added by user = future redux
    this.props.saveComment(this.state.comment);

    //empty out text area
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={this.handleChange} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

//first param is mapStateToProps, nothin so null
// export default connect(mapStateToProps, actions)(CommentBox);
//now we have state being brought in, so add mapStateToProps
export default connect(mapStateToProps, actions)(CommentBox);
