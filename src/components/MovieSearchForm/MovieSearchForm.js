import React, { Component } from 'react';
import styles from './MovieSearchForm.module.css'
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

    if (this.state.query.trim() === '') {
      alert('Пожалуйста введите валидные данные в поиске');
      this.reset();
      return;
    }

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
        <form className={styles.formSearch} onSubmit={this.handleSubmit}>
          <input
            type="text"
            className={styles.inputSearch}
            autoComplete="off"
            autoFocus
            placeholder="Поиск фильма"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.btnSearch}>Искать</button>
        </form>
      </>
    );
  }
}

export default MovieSearchForm;
