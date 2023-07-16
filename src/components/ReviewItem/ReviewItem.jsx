import React from 'react';
import css from './ReviewItem.module.css'

const ReviewItem = ({ review }) => {
	const { author, author_details, content, created_at, id, updated_at } = review
	const { avatar_path	} = author_details
	const defaultImg = 'https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg'
	const avatarImg = avatar_path 
	? avatar_path.substring(1) 
	: defaultImg;
	
    return ( 
    	<li key={id} className={css['review__card']}>
			<img 
				src={avatarImg} 
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
 
export default ReviewItem;