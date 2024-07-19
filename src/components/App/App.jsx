import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

export default function App() {
  return (
 <div>
  <Navigation/>
  <Suspense fallback={<Loader/>}>
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/movies' element={<MoviesPage/>}/>
  <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
    <Route path='cast' element={<MovieCast/>}/>
    <Route path='reviews' element={<MovieReviews/>}/>
  </Route>
  <Route path='*' element={<NotFoundPage/>}/>
 </Routes>
  </Suspense>
 </div>
  )
}
