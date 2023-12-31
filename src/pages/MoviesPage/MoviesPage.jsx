import React, {useState, useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';

import Notiflix from 'notiflix';

import { getSearchMovies } from '../../api/movies'

import Loader from '../../components/Loader/Loader'
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchText = searchParams.get('query')
    const [isLoading, setIsLoading] = useState(false)
	const [movies, setMovies] = useState(null)
    const [error, setError] = useState(null)

    const handleSearch = (value) => {
        const text = value.trim() 
        setSearchParams({
            query: text,
          });
    }

    useEffect(() => {
       const getData = async () => {
        try {
            setIsLoading(true)

            if(!searchText) return;
            
            const {results} = await getSearchMovies(searchText)

            if ( results.length === 0 ) {
                Notiflix.Notify.failure(
                    'Sorry, there are no movies matching your search query. Please try again.',
                  )
                  setMovies(null)
                  return;
                } else {
                    Notiflix.Notify.success(
						`Hooray! We found ${results.length} movies.`,
					  )
                    // console.log('results :>> ', results)
                    setMovies(results)
                }
            
        } catch (error) {
            setError(error.message)
			console.log('error :>> ', error)
        } finally {
			setIsLoading(false)
		}
    }
    getData() 
    }, [searchText]);

    return ( 
    <>
        <SearchMovie handleSearch={handleSearch}/>
        {isLoading && <Loader />}
        {error !== null && (
			<p className="c-error">
				Oops, some error occured. Please, try again later. Error: {error}
			</p>
		)}
        {movies && <MoviesList movies={movies}/>}
    </> 
    );
}
 
export default MoviesPage