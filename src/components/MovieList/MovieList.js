import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

MovieList.defaultProps = {
  poster_path: '',
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
};

export default withRouter(MovieList);
