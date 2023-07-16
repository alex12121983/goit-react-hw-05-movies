import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDNmNzE5ZWMwNGJmZjRkZGMzYWE5ZjZlMmRjNGQ5ZSIsInN1YiI6IjY0YTA0MDEwODFkYTM5MDEwYjhhZGNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B-flHJ2qqW-7IKxqsY5Y_9NJ4QXIkPDtLv4GMti5oH8';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: API_KEY,
  },
};

export const getTrendingMovies = async () => {
  const { data } = await axios(
    `${BASE_URL}/trending/movie/day?language=en-US`,
    options
  );
  return data;
};

export const getSearchMovies = async searchText => {
  const { data } = await axios(
    `${BASE_URL}/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios(
    `${BASE_URL}/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios(
    `${BASE_URL}/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios(
    `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};
