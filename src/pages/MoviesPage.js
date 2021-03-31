import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieSearchForm from '../components/MovieSearchForm';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    films: [],
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }

  onChangeQuery = query => {
    // console.log(query);
    this.setState({
      searchQuery: query,
      films: [],
      error: null,
    });
  };

  async fetchMovies() {
    const { searchQuery } = this.state;
    // const options = { searchQuery };

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5079f7c81cecd12ed5e7da99381ff346&query=${searchQuery}`,
    );
    const { results } = await response.json();
    // console.log(results);
    this.setState({
      films: [...results],
    });
    console.log(this.state.films);
    // newsApi
    //       .fetchArticles(options)
    //       .then(articles => {
    //         this.setState(prevState => ({
    //           articles: [...prevState.articles, ...articles],
    //           currentPage: prevState.currentPage + 1,
    //         }));
    //       })
    //       .catch(error => this.setState({ error }))
    //       .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    console.log(this.props.match.url);
    console.log(this.props.match.path);

    return (
      <>
        <h2>Компонент Поиска</h2>
        <div>
          {/* {error && <h1>Ой ошибка, всё пропало!!!</h1>} */}

          <MovieSearchForm onSubmit={this.onChangeQuery} />

          <ul>
            {this.state.films.map(film => (
              <li key={film.id}>
                <Link to={`${this.props.match.url}/${film.id}`}>
                  <div>
                    <p>{film.title}</p>
                    {/* <img src={`${imgUrl}${film.poster_path}`} alt={film.title} /> */}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default MoviesPage;
