import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    title: null,
    genres: null,
    overview: null,
    release_date: null,
    runtime: null,
    backdrop_path: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=5079f7c81cecd12ed5e7da99381ff346&language=ru-RU`,
    );
    const result = await response.json();
    console.log(result);
    this.setState({ ...result });
  }
  render() {
    console.log(this.props.match.url);
    console.log(this.props.match.path);

    const {
      title,
      genres,
      overview,
      release_date,
      runtime,
      backdrop_path,
    } = this.state;

    const imgUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    // console.log(imgUrl);
    // console.log(release_date);

    console.log(this.props.match.url);
    console.log(this.props.match.path);
    return (
      <div>
        <div>
          <h1>"{title}"</h1>
          {/* <h2> {this.props.match.params.movieId}</h2> */}
          <img src={imgUrl} alt={title} />
          <p>Дата выпуска: {release_date}</p>
          {runtime !== 0 && <p>Продолжителньость фильма: {runtime} мин</p>}
          {genres && <p>Жанр: {genres.map(genre => genre.name).join(', ')}</p>}
          <p>Сюжет: {overview}</p>
        </div>
        <div>
          <h3>Дополнительная информация</h3>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/cast`}>Актерский состав</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/reviews`}>Отзывы</Link>
            </li>
          </ul>

          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
