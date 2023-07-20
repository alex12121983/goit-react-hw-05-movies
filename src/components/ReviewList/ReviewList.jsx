import ReviewItem from "components/ReviewItem/ReviewItem"
import PropTypes from 'prop-types'
import css from "./ReviewList.module.css"

const ReviewList = ({reviews}) => {
    return ( <ul className={css['reviews__list']}>
				{reviews && reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</ul> );
}
 
export default ReviewList

ReviewList.propTypes = {
    reviews: PropTypes.arrayOf(
		PropTypes.shape({
		  id: PropTypes.string.isRequired,
		  author: PropTypes.string.isRequired,
		  content: PropTypes.string.isRequired,
		  created_at: PropTypes.string.isRequired,
		  updated_at: PropTypes.string.isRequired,
		})
	  ).isRequired,
}
