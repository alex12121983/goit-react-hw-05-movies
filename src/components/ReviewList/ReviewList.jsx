import ReviewItem from "components/ReviewItem/ReviewItem";
import css from "./ReviewList.module.css"

const ReviewList = ({reviews}) => {
    return ( <ul className={css['reviews__list']}>
				{reviews && reviews.map(review => (
					<ReviewItem review={review} />
				))}
			</ul> );
}
 
export default ReviewList;