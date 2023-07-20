import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieCredits } from '../../api/movies'

import Loader from '../../components/Loader/Loader'
import CastList from 'components/CastList/CastList';

const CastPage = () => {
    const [credits, setCredits] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
    const { movieId } = useParams()
	
    useEffect(() => {
        const getData = async () => {
			try {
				setIsLoading(true)
				
				const {cast} = await getMovieCredits(movieId)

				if ( cast.length === 0 ) {
					Notiflix.Notify.failure(
						'Sorry, there are no information about actors. Please try again later.',
					  )
					  setCredits(null)
					  return;
					} else {
						Notiflix.Notify.success(
							`Hooray! We found a lot of infomation about ${cast.length} actors.`,
						  )
						// console.log('cast :>> ', cast)
						setCredits(cast)
					}
			} catch (error) {
				setError(error.message)
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
			{error !== null && (
				<p className="c-error">
					Oops, some error occured. Please, try again later. Error: {error}
				</p>
			)}
			{credits && <CastList credits={credits}/>}
		</>  
	);
}
 
export default CastPage 