import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MoviePreview from '../MoviePreview';

import styles from './MovieList.module.css';

const MovieList = ({ films, location }) => {
  

  return (
    <ul className={styles.listMovie}>
      {films &&
        films.map(({ id, title, poster_path }) => (
          <li key={id} className={styles.itemMovie}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              <MoviePreview title={title} poster_path={poster_path} />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default withRouter(MovieList);
