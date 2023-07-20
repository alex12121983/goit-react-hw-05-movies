import React from 'react'
import MovieCard from 'components/MovieCard/MovieCard'
import PropTypes from 'prop-types'
import css from './MoviesList.module.css'

const MoviesList = ({movies}) => {
    return ( 
        <ul className={css['movies__list']}>
            {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    );
}
 
export default MoviesList

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
        release_date: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
    ),
  }

