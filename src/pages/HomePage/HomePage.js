import React, { Component } from 'react';
import Title from '../../components/Title';
import MovieList from '../../components/MovieList';
import Container from '../../components/Container';
import movieApi from '../../services/movieApi';
class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    try {
      const result = await movieApi.fetchTrendingMovie();

      this.setState({
        films: [...result],
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { films } = this.state;
    return (
      <Container>
        <Title title="Смотри самые популярные фильмы" />

        <MovieList films={films} />
      </Container>
    );
  }
}

export default HomePage;
