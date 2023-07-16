import React from 'react';
import CastItem from 'components/CastItem/CastItem';
import css from "./CastList.module.css"

const CastList = ({credits}) => {
    return ( 
        <ul className={css['movies__list']}>
			{credits && credits.map(credit => (
				<CastItem credit={credit}/>
			))}
		</ul>
     );
}
 
export default CastList;