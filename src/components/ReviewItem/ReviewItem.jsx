import React from 'react';
import PropTypes from 'prop-types'
import css from './ReviewItem.module.css'

const ReviewItem = ({ review }) => {
	const { author, content, created_at, id, updated_at } = review
	const defaultImg = 'https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
	
	
    return ( 
    	<li key={id} className={css['review__card']}>
			<img 
				src={defaultImg} 
				className={css['review__card-photo']} 
				alt={author} 
			/>
  			<div className={css['review__card-body']}>
				<h4 className={css['review__card-body-title']}>
				Author: {author}, created at {created_at}, updated at {updated_at}.
				</h4>
				<p className={css['review__card-body-content']}>{content}</p>
  			</div>
    	</li> 
    );
}
 
export default ReviewItem

ReviewItem.propTypes = {
    review:	PropTypes.shape({
		id: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		content: PropTypes.string.isRequired,
		created_at: PropTypes.string.isRequired,
		updated_at: PropTypes.string.isRequired,
	}).isRequired,
}