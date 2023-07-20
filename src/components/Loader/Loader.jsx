import React from 'react'
import  { TailSpin }  from  'react-loader-spinner'
import PropTypes from 'prop-types'
import css from './Loader.module.css'

const Loader = () => {
        return (
          <div className={css.loaderOverlay}> 
            <TailSpin
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{position: 'absolute', top: '30%', left: '43%'}}
              wrapperClass="tail-spin-loading"
              visible={true}
            />
          </div>
        ) 
}

export default Loader