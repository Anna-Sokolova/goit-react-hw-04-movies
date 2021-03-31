import React, { Component } from 'react';

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
    console.log(this.state.reviews);
  }

  render() {
    return (
      <>
        <h2>Отзывы</h2>
        {this.state.reviews.length !== 0 ? (
          this.state.reviews.map(review => (
            <li key={review.id}>
              <p>Атор: {review.author}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>К этому фильму отзывов ещё нет!</p>
        )}
      </>
    );
  }
}

export default Reviews;
