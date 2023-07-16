import MovieCard from 'components/MovieCard/MovieCard';
import React from 'react';
import css from './MoviesList.module.css'

const MoviesList = ({movies}) => {
    return ( 
        <ul className={css['movies__list']}>
            {movies &&
                movies.map((movie) => (
                <MovieCard 
                    movie={movie}
                />
            ))}
        </ul>
    );
}
 
export default MoviesList;