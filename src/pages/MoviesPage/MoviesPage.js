import React, { Component } from 'react';
import queryString from 'query-string';

import MovieSearchForm from '../../components/MovieSearchForm';
import Title from '../../components/Title';
import MovieList from '../../components/MovieList';
import Container from '../../components/Container';
import movieApi from '../../services/movieApi';
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

    //сохраняем историю запроса при сабмите с формы
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `searchQuery=${query}`,
    });
  };

  async fetchMovies() {
    try {
      const { searchQuery } = this.state;
      const results = await movieApi.fetchMovieBySearch(searchQuery);

      if (results.length === 0) {
        alert('Попробуй-ка ещё разок ;)');
        return;
      }

      this.setState({
        films: [...results],
      });
    } catch (error) {
      console.log(error);
    }
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
