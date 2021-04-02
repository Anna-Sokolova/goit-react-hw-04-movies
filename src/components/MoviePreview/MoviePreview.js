import React from 'react';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ title, poster_path }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w300';
  
  return (
    <div className={styles.card}>
      <div className={styles.cardThumb}>
        <img src={`${imgUrl}${poster_path}`} alt={title} />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardHeading}>{title}</h3>
      </div>
    </div>
  );
};

export default MoviePreview;
