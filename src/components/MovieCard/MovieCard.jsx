import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css'

const MovieCard = ({movie}) => {
    const {id, title, poster_path, release_date} = movie
    const locationMovie = useLocation()
    // const backLinkHref = useRef(locationMovie.state?.from ?? '/');
    
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    return ( 
    <li key={id} id={id} className={css['movies__card']}>
        <Link to={`/movies/${id}`} state={locationMovie}>
            <img
                className={css['movies__card-photo']}
                src={
                    poster_path 
						? `https://image.tmdb.org/t/p/w500${poster_path}`
						: defaultImg
                }
                alt={title}
                loading="lazy"
                width="395px"
                height="574px"
            />
            <h2 className={css['movies__card-title']}>{title}</h2>
            <p className={css['movies__card-genres']}>{release_date}</p>
        </Link>
    </li>
    );
}
 
export default MovieCard