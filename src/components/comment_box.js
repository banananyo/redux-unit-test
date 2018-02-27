import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // do action
    this.props.saveComment(this.state.comment, Date.now());

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form className="comment-box" onSubmit={this.handleSubmit.bind(this)}>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
        />
        <button type="submit" onClick={this.handleSubmit.bind(this)}>
          Submit comment
        </button>
      </form>
    );
  }
}

// const mapDispatchToProps = {
//   handleSaveComment: (comment) => {
//     saveComment(comment);
//   },
//   dispatch,
// };

export default connect(null, actions)(CommentBox);
