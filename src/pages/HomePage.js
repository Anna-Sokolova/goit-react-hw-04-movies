import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

    // const imgUrl = 'https://image.tmdb.org/t/p/w300';
    // console.log(imgUrl);
    return (
      <>
        <h2>Самые популярные фильмы сегодня</h2>
        <ul>
          {this.state.films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>
                <div>
                  <p>{film.title}</p>
                  {/* <img src={`${imgUrl}${film.poster_path}`} alt={film.title} /> */}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
