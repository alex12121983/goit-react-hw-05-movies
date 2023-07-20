import React from 'react'
import PropTypes from 'prop-types'
import css from './Movie.module.css'

const Movie = ({ movie }) => {
    const { title, 
		poster_path, 
		release_date, 
		overview, 
		genres, 
		vote_average,
		vote_count,
		popularity,
		original_title,
		} = movie

    return ( 
			<>
				<div className={css["modal-movie"]} id="modal_movie">
				  <div className={css["movie-card"]}>
					<div className={css["movie-card_request"]}>
					  <div className={css["movie-card_img-cover"]}>
						<img 
							src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
							className={css["movie-card_photo"]} 
							alt={title} 
						/>
					  </div>
					</div>
					<div className={css["movie-description"]}>
					  <h2 className={css["movie-title"]}>{title}, ({release_date})</h2>
					  <table className={css["movie-table"]}>
						<tbody>
						  <tr className={css["movie-table_row"]}>
							<td>
							  <p className={css["movie-table_title"]}>Vote / Votes</p> 
							</td>
							<td>
							  <p>
								<span className={css["movie-table_vote"]}>
									<span className={css["movie-table_vote_aver"]}>
										{vote_average}
									</span>
									/ {vote_count}
								</span>
							  </p>
							</td>
						  </tr>
						  <tr className={css["movie-table_row"]}>
							<td>
							  <p className={css["movie-table_title"]}>Popularity</p>
							</td>
							<td>
							  <p className={css["movie-table_popularitynum"]}>
								{popularity}
							  </p>
							</td>
						  </tr>
						  <tr className={css["movie-table_row"]}>
							<td>
							  <p className={css["movie-table_title"]}>Original Title</p>
							</td>
							<td>
							  <p>{original_title}</p>
							</td>
						  </tr>
						  <tr className={css["movie-table_row"]}>
							<td>
							  <p className={css["movie-table_title"]}>Genre</p>
							</td>
							<td>
							  	<ul className={css["movie-table_genres"]}>
									{genres && genres.map(({ id, name }) => (
									<li key={id} className={css["movie-table_genres-item"]}>
										{name}
									</li>))}
								</ul>
							</td>
						  </tr>
						</tbody>
					  </table>
					  <div className={css["movie-about_container"]}>
						<h3 className={css["movie-about"]}>About</h3>
						<p className={css["movie-about_text"]}>
							{overview}
						</p>
					  </div>
					</div>
				  </div>
				</div>
			</>					
     );
}
 
export default Movie

Movie.propTypes = {
	movie: PropTypes.shape({
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
            release_date: PropTypes.string.isRequired,
			overview: PropTypes.string.isRequired,
		  	id: PropTypes.number.isRequired,
			vote_average: PropTypes.number.isRequired,
			vote_count: PropTypes.number.isRequired,
			popularity: PropTypes.number.isRequired,
			original_title: PropTypes.string.isRequired,
			genres: PropTypes.arrayOf(
				PropTypes.shape({
				  id: PropTypes.number.isRequired,
				  name: PropTypes.string.isRequired,
				})
			  ).isRequired,
		}).isRequired,
}