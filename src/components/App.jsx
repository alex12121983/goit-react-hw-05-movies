import React, { lazy } from "react"
import { Navigate, Route, Routes } from "react-router-dom"

import Layout from "./Layout/Layout"

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'))
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'))
const CastPage = lazy(() => import('../pages/CastPage/CastPage'))
const ReviewsPage = lazy(() => import('../pages/ReviewsPage/ReviewsPage'))

const App = () => {
  
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
