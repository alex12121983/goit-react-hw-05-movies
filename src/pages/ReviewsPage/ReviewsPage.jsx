import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Notiflix from 'notiflix'

import { getMovieReviews } from '../../api/movies'

import ReviewList from '../../components/ReviewList/ReviewList'
import Loader from '../../components/Loader/Loader'

const ReviewsPage = () => {
    const [reviews, setReviews] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
    const { movieId } = useParams()
    
	useEffect(() => {
        const getData = async () => {
			try {
				setIsLoading(true)
				const { results } = await getMovieReviews(movieId)
				console.log('results :>> ', results)
				
				if ( results.length === 0 ) {
					Notiflix.Notify.failure(
						'Sorry, there are no reviews about this movie. Please try again later.',
					  )
					  setReviews(null)
					  return;
					} else {
						Notiflix.Notify.success(
							`Hooray! We found ${results.length} reviews about this movie.`,
						  )
						// console.log('results :>> ', results)
						setReviews(results)
					}
			} catch (error) {
				console.log('error :>> ', error)
			} finally {
				setIsLoading(false)
			}
		}
		getData()
    }, [movieId]);
    return ( 
        <>
		    {isLoading && <Loader />}
			<ReviewList reviews={reviews}/>
		</>  
    );
}
 
export default ReviewsPage;