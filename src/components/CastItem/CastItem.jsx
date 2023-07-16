import React from 'react';
import css from './CastItem.module.css'

const CastItem = ({credit}) => {
	const { id, name, profile_path, popularity, character } = credit
	const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    return ( 
	<>
		{/* <li key={id} className="card">
			<img 
				src={`https://image.tmdb.org/t/p/w500${profile_path}`} 
				className="card-img-top" 
				alt={name} 
			/>
			<div className="card-body">
				<h4 className="card-title">
						{name}
				</h4>
				<h5>popularity</h5>
				<p className="card-text">{popularity}</p>
			</div>
    	</li>  */}
		<li key={id} id={id} className={css['movies__card']}>
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
 
export default CastItem;