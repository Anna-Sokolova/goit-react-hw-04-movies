import React from 'react';
import { Link } from 'react-router-dom';
import MoviePreview from '../MoviePreview';

import styles from './MovieList.module.css';

const MovieList = ({ films }) => {
  return (

      <ul className={styles.listMovie}>
        {films &&
          films.map(({ id, title, poster_path }) => (
            <li key={id} className={styles.itemMovie}>
              <Link to={`/movies/${id}`}>
                <MoviePreview title={title} poster_path={poster_path} />
              </Link>
            </li>
          ))}
      </ul>

  );
};

export default MovieList;
