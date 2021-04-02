import React, { Component } from 'react';
import styles from './Reviews.module.css';
class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=5079f7c81cecd12ed5e7da99381ff346`,
    );
    const { results } = await response.json();
    // console.log(results);

    this.setState({ reviews: [...results] });
  }

  render() {
    const { reviews } = this.state;

    return (
      <div className={styles.cardReview}>

        <ul className={styles.listReview}>
          {reviews.length !== 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id} className={styles.itemReview}>
                <p className={styles.authorReview}>Атор: {author}</p>
                <p className={styles.textReview}>{content}</p>
              </li>
            ))
          ) : (
            <p className={styles.noticeReview}>
              К этому фильму отзывов ещё нет!
            </p>
          )}
        </ul>
      </div>
    );
  }
}

export default Reviews;
