import React from 'react';
import PropTypes from 'prop-types'
import css from './CastItem.module.css'

const CastItem = ({credit}) => {
	const { id, name, profile_path, popularity, character } = credit
	const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    return ( 
	<>
		<li key={id} className={css['movies__card']}>
				<img
					className={css['movies__card-photo']}
					src={
						profile_path 
						? `https://image.tmdb.org/t/p/w500${profile_path}`
						: defaultImg
					} 
					alt={name} 
					loading="lazy"
					width="395px"
					height="574px"
				/>
				<h4 className={css['movies__card-title']}>{name}</h4>
				<p className={css['movies__card-genres']}>Popularity: {popularity}</p>
				<p className={css['movies__card-genres']}>Character: {character}</p>
		</li>
	</>
    
    );
}
 
export default CastItem

CastItem.propTypes = {
    credit:	PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  name: PropTypes.string.isRequired,
		  profile_path: PropTypes.string,
		  popularity: PropTypes.number.isRequired,
		  character: PropTypes.string.isRequired,
		}).isRequired,
}