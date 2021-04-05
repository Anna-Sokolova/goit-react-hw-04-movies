import React, { Component } from 'react';
import movieApi from '../../services/movieApi';
import Title from '../Title';
import styles from './Cast.module.css';
import defaultImgActor from '../../images/defaultImages/default-actor.jpg';
class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const cast = await movieApi.fetchCast(movieId);

    this.setState({ cast: [...cast] });
    // console.log(this.state.cast);
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <Title title="В фильме снимались:" />

        <ul className={styles.listCast}>
          {cast &&
            cast.map(({ id, profile_path, name, character }) => {
              const imgPosterUrl = `https://image.tmdb.org/t/p/w92/${profile_path}`;

              return (
                <li key={id} className={styles.itemCast}>
                  <img
                    src={
                      profile_path ? `${imgPosterUrl}` : `${defaultImgActor}`
                    }
                    alt={name}
                  />
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

export default Cast;
