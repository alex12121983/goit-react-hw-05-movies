import React, { useState } from 'react'
import Notiflix from 'notiflix'

import css from './SearchMovie.module.css'
import searchImg from "../../images/search_ico.png"

const SearchMovie = ({handleSearch}) => {
    //Хук useState нужен для паттерна "контролируемая форма"
    const [value, setValue] = useState('')
    //Метод вызывается когда польлзователь начинает вводить запрос в инпут
    const handleChange = ({ target: { value } }) => {
        setValue(value)
    }
    //Метод запускается при клике по кнопке
    const handleSubmit = (evt) => {
        //Запрет на перезагрузку страницы
        evt.preventDefault()
        //Проверка на ввод с пустой строкой
        if (value.trim() === '') {
            return Notiflix.Notify.warning(
              'Please enter key words for search.',
            );
          }
        // Запуск метода handleSearch со значением, которое ввел пользователь
        handleSearch(value)
        //Установление пустой строки в качестве значения инпута 
        // setValue('')
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
                    <button type="submit" className={css['input_button']} id="button-addon2">
                        <img src={searchImg} alt="#" />
                    </button>
                </div>
            </form>
     );
}
 
export default SearchMovie;