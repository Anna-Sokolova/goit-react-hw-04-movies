import React from 'react';
import defaultImgPreview from '../../images/defaultImages/default-img-preview.jpg';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ title, poster_path }) => {
  const imgUrlPreview = `https://image.tmdb.org/t/p/w300${poster_path}`;

  return (
    <div className={styles.card}>
      <div className={styles.cardThumb}>
        <img
          src={poster_path ? `${imgUrlPreview}` : `${defaultImgPreview}`}
          alt={title}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardHeading}>{title}</h3>
      </div>
    </div>
  );
};

export default MoviePreview;
