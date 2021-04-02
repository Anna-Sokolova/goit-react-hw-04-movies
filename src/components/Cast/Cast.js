import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import styles from './Cast.module.css';
import defaultImg from './actor-default.jpg';
class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5079f7c81cecd12ed5e7da99381ff346&language=ru-RU`,
    );
    const result = await response.json();
    const cast = result.cast;
    this.setState({ cast: [...cast] });
    console.log(this.state.cast);
  }

  render() {
    return (
      <>
        <Title title="В фильме снимались:" />

        <ul className={styles.listCast}>
          {this.state.cast &&
            this.state.cast.map(({ id, profile_path, name, character }) => {
              const imgPosterUrl = `https://image.tmdb.org/t/p/w92/${profile_path}`;

              return (
                <li key={id} className={styles.itemCast}>
                  <img src={imgPosterUrl} alt={name} />
                  <div className={styles.cardContent}>
                    <p className={styles.Actor}>{name}</p>
                    <p className={styles.Character}>{character}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

// Cast.defaultProps = {
//   imgPosterUrl: defaultImg,
// };

export default Cast;
