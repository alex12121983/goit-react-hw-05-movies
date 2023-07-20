import React, { useState } from 'react'
import Notiflix from 'notiflix'
import PropTypes from 'prop-types'
import css from './SearchMovie.module.css'
import searchImg from "../../images/search_ico.png"

const SearchMovie = ({handleSearch}) => {
    const [value, setValue] = useState('')

    const handleChange = ({ target: { value } }) => {
        setValue(value)
    }

    const handleSubmit = (evt) => {

        evt.preventDefault()

        if (value.trim() === '') {
            return Notiflix.Notify.warning(
              'Please enter key words for search.',
            );
          }

        handleSearch(value)

    }

    return ( 
            <form className={css.form} onSubmit={handleSubmit}>
                <div className={css['input-group']}>
                    <input
                        className={css.input}
                        type="form-control"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movie"
                        name="search"
                        aria-describedby="button-addon2"
                        onChange={handleChange}
                        value={value}
                        required
                    />
                    <button type="submit" className={css['input_button']}>
                        <img src={searchImg} alt="search" />
                    </button>
                </div>
            </form>
     );
}
 
export default SearchMovie

SearchMovie.propTypes = {
    handleSearch: PropTypes.func.isRequired,
  }