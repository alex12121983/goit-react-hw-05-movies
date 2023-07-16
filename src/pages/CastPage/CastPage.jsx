import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getMovieCredits } from '../../api/movies'

import Loader from '../../components/Loader/Loader'
import CastList from 'components/CastList/CastList';

const CastPage = () => {
    const [credits, setCredits] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
    const { movieId } = useParams()
	
    useEffect(() => {
        const getData = async () => {
			try {
				setIsLoading(true)
				const {cast} = await getMovieCredits(movieId)
				console.log('cast :>> ', cast)
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
						// console.log('results :>> ', results)
						setCredits(cast)
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
			<CastList credits={credits}/>
		</>  
	);
}
 
export default CastPage;