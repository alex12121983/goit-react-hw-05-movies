import React, { Suspense, useEffect, useState } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import Notiflix from 'notiflix'

import { getMovieDetails } from '../../api/movies'

import Movie from 'components/Movie/Movie'
import Loader from '../../components/Loader/Loader'

import css from './MovieDetails.module.css'

const MovieDetails = () => {
    const [movie, setMovie] = useState(null)
	const { movieId } = useParams()
	const [isLoading, setIsLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		const getData = async () => {
			try {
				setIsLoading(true)
				const data = await getMovieDetails(movieId)
					Notiflix.Notify.success(
						`Hooray! We found info about this film.`,
					  )
					setMovie(data)
				// console.log('data :>> ', data)
				
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
	}, [movieId])

	const handleClick = () => {
		navigate(location.state ? location.state : '/movies')
	}

	return (
		movie && (
			<>
				{isLoading && <Loader />}
				<button
						onClick={handleClick}
						className={css['back-link']}
				>
					Back
				</button>
				<Movie movie={movie} />
				<ul className={css["additional-info"]}>
					<li className={css["additional-info__item"]}>
                        <Link to="cast">Cast</Link>
                    </li>
					<li className={css["additional-info__item"]}>
						<Link to="reviews">Reviews</Link>
                    </li>
				</ul>
				<Suspense>
            		<Outlet />
				</Suspense>
			</>
		)
	)
}
 
export default MovieDetails
