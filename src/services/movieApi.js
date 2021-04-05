const apiKey = '5079f7c81cecd12ed5e7da99381ff346';
const BASE_URL = 'https://api.themoviedb.org/3';

//function for getting the most popular movies
const fetchTrendingMovie = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${apiKey}&language=ru-RU`,
  );
  const data = await response.json();
  const result = await data.results;
  return result;
  // console.log(result);
};

//function for getting the movie`s details
const fetchDetailsMovie = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${apiKey}&language=ru-RU`,
  );
  const result = await response.json();
  return result;
  // console.log(result);
};

//function for getting movie by search
const fetchMovieBySearch = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${apiKey}&query=${query}`,
  );
  const { results } = await response.json();
  return results;
  // console.log(results);
};

//function for getting cast
const fetchCast = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${apiKey}&language=ru-RU`,
  );
  const result = await response.json();
  const cast = result.cast;
  return cast;
};

//function for geyying rewievs
const fetchReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${apiKey}`,
  );
  const { results } = await response.json();
  return results;
  // console.log(results);
};

export default {
  fetchTrendingMovie,
  fetchDetailsMovie,
  fetchMovieBySearch,
  fetchCast,
  fetchReviews,
};
