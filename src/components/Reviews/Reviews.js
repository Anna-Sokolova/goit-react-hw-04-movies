import React, { Component } from 'react';
import PropTypes from 'prop-types';
import movieApi from '../../services/movieApi';
import styles from './Reviews.module.css';
class Reviews extends Component {
  static defaultProps = {
    reviews: [],
  };

  static propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object),
  };
  
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const results = await movieApi.fetchReviews(movieId);

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
