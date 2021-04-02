import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Cast from '../../components/Cast';
import Container from '../../components/Container';
import Reviews from '../../components/Reviews';
import Title from '../../components/Title';
import styles from './MoviesDetailsPage.module.css';

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
    // console.log(result);
    this.setState({ ...result });
  }
  render() {
    // console.log(this.props.match.url);
    // console.log(this.props.match.path);

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
    // console.log(this.props.match.url);
    // console.log(this.props.match.path);
    return (
      <Container>
        <Title title="Информация о фильме" />
        <div className={styles.card}>
          {/* <h2> {this.props.match.params.movieId}</h2> */}
          <img src={imgUrl} alt={title} />

          <div className={styles.content}>
            <h3 className={styles.title}>"{title}"</h3>
            {release_date && (
              <p className={styles.text}>
                <span className={styles.textTitle}>Дата выпуска:</span>{' '}
                {release_date}
              </p>
            )}
            {runtime !== 0 && (
              <p className={styles.text}>
                <span className={styles.textTitle}>
                  Продолжителньость фильма:
                </span>{' '}
                {runtime} мин
              </p>
            )}
            {genres && (
              <p className={styles.text}>
                <span className={styles.textTitle}>Жанр:</span>{' '}
                {genres.map(genre => genre.name).join(', ')}
              </p>
            )}
            {overview !== '' && (
              <p className={styles.text}>
                <span className={styles.textTitle}>Сюжет:</span> {overview}
              </p>
            )}
          </div>
        </div>
        <div>
          <Title title="Дополнительная информация" />
          <ul className={styles.addInfo}>
            <li className={styles.itemInfo}>
              <Link to={`${this.props.match.url}/cast`}>
                <span className={styles.textTitle}>Актерский состав</span>
              </Link>
            </li>
            <li className={styles.itemInfo}>
              <Link to={`${this.props.match.url}/reviews`}>
                <span className={styles.textTitle}>Отзывы</span>
              </Link>
            </li>
          </ul>

          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </div>
      </Container>
    );
  }
}

export default MovieDetailsPage;
