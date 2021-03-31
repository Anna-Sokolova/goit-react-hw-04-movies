import React, { Component } from 'react';

class MovieSearchForm extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    // console.log(e.currentTarget.value);
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({
      query: '',
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </>
    );
  }
}

export default MovieSearchForm;
