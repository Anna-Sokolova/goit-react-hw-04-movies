import React, { Component } from 'react';
import Title from '../components/Title';
import MovieList from '../components/MovieList';
import Container from '../components/Container';
// import axios from 'axios';

class HomePage extends Component {
  state = {
    films: [],
  };

  async componentDidMount() {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=5079f7c81cecd12ed5e7da99381ff346&language=ru-RU',
    );
    const data = await response.json();
    const result = await data.results;
    console.log(result);

    this.setState({
      films: [...result],
    });
  }

  render() {
    console.log(this.props.match.url);
    console.log(this.props.match.path);

    const imgUrl = 'https://image.tmdb.org/t/p/w300';
    // console.log(imgUrl);
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
