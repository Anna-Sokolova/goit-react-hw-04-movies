import React, { Component } from 'react';
import queryString from 'query-string';

import MovieSearchForm from '../../components/MovieSearchForm';
import Title from '../../components/Title';
import MovieList from '../../components/MovieList';
import Container from '../../components/Container';
class MoviesPage extends Component {
  state = {
    searchQuery: '',
    films: [],
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search); //получаем значение с инпута
    // console.log(queryParams.searchQuery);

    //проверяем и записываем в стейт
    if (this.props.location.pathname && this.props.location.search) {
      this.setState({ searchQuery: queryParams.searchQuery });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies(this.state.searchQuery);
    }
  }

  onChangeQuery = query => {
    // console.log(query);
    this.setState({
      searchQuery: query,
      films: [],
    });

    //сохраняем историю запроса
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `searchQuery=${query}`,
    });
  };

  async fetchMovies() {
    const { searchQuery } = this.state;

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5079f7c81cecd12ed5e7da99381ff346&query=${searchQuery}`,
    );
    const { results } = await response.json();
    // console.log(results);

    if (results.length === 0) {
      alert('Попробуй-ка ещё разок ;)');
      return;
    }

    this.setState({
      films: [...results],
    });
  }

  render() {
    const { films } = this.state;
    return (
      <Container>
        <Title title="Какой фильм посмотрим сегодня?" />

        <MovieSearchForm onSubmit={this.onChangeQuery} />

        <MovieList films={films} />
      </Container>
    );
  }
}

export default MoviesPage;
