import React, { Component } from 'react';

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
    const imgPosterUrl = `https://image.tmdb.org/t/p/w92/`;
    return (
      <div>
        <h1>В фильме снимались:</h1>
        {this.state.cast &&
          this.state.cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`${imgPosterUrl}${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>В роли:{actor.character}</p>
            </li>
          ))}
      </div>
    );
  }
}

export default Cast;
