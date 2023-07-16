import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../pages/Layout/Layout";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))
const CastPage = lazy(() => import('../pages/CastPage/CastPage'))
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'))

const App = () => {
  
    // Разметка для ДЗ
    // <Layout /> компонент в виде хедера, навбар с пунктами Home и Movies
    // Инедксный маршрут, рендерит HomePage.
    // Страница HomePage, при монтировании компонента
    // (реализовать через хук useEffect, который следит за пустым массивом) 
    // делает запрос на бекенд и рендерит список самых популярных фильмов.
    // Каждый элемент списка является ссылкой при клике на которую 
    // осуществляется переход на страницу MovieDetails.

    // Страница MoviesPage поиска фильма по названию, принимает от позьзователя 
    // текст запроса и делает запрос на бекенд с этим текстом. Реализовать через 
    // хук useEffect, который следит за полем, например, query хука useState.
    // Результатом выполнения запроса будет массив фильмов удовлетворяющий запросу
    // Компонент отрендерит его. Каждый элемент списка будет ссылкой при клике 
    // на которую осуществляется переход на страницу MovieDetails

    // Страница MovieDetails, принимает Id фильма, при монтировании делает запрос
    // на бекенд с соответсвующим Id фильма, рендерит данные из запроса. На странице
    // есть дополниетельные ссылки на вложенные компоненты Cast (информация о актерском 
    // составе) и Reviews (информация об обзорах). При рендере комопнента делается 
    // запрос на бекенд и рендерится информация. 
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path='movies' element={<MoviesPage />} />
            
            <Route path='movies/:movieId' element={<MovieDetails />}>
                <Route path='cast' element={<CastPage />} />
                <Route path='reviews' element={<ReviewsPage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes> 
    )
}

export default App;
