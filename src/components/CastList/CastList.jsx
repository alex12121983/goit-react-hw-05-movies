import React from 'react';
import CastItem from 'components/CastItem/CastItem';
import PropTypes from 'prop-types'
import css from "./CastList.module.css"

const CastList = ({credits}) => {
    return ( 
        <ul className={css['movies__list']}>
			{credits && credits.map(credit => (
				<CastItem key={credit.id} credit={credit}/>
			))}
		</ul>
     );
}
 
export default CastList

CastList.propTypes = {
    credits: PropTypes.arrayOf(
		PropTypes.shape({
		  id: PropTypes.number.isRequired,
		  name: PropTypes.string.isRequired,
		  profile_path: PropTypes.string,
		  popularity: PropTypes.number.isRequired,
		  character: PropTypes.string.isRequired,
		})
	  ).isRequired,
}

