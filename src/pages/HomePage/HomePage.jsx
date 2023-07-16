import React, {useState, useEffect} from "react"
import { getTrendingMovies } from '../../api/movies'
import Loader from '../../components/Loader/Loader'
import Notiflix from 'notiflix';
import MoviesList from "components/MoviesList/MoviesList";

const HomePage = () => {
    const [movies, setMovies] = useState(null)
	const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
			try {
				setIsLoading(true)
				const {results} = await getTrendingMovies()
                if ( results.length > 0 ) {
					Notiflix.Notify.success(
						`Hooray! We found ${results.length} trending movies.`,
					  )
				}
				// console.log('results :>> ', results)
				setMovies(results)
			} catch (error) {
				console.log('error :>> ', error)
			} finally {
                setIsLoading(false)
            }
		}
		getData()
    }, []);
    return (
    <>
        {isLoading && <Loader />}
        <MoviesList movies={movies}/>
    </>
)}

export default HomePage;