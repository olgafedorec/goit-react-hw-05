import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage';
import MovieCast from '../MovieCast/MovieCast';
import MovieReview from '../MovieReview/MovieReview';

export default function App() {
  return (
 <div>
  <Navigation/>
  
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/movies' element={<MoviesPage/>}/>
  <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
    <Route path='cast' element={<MovieCast/>}/>
    <Route path='reviews' element={<MovieReview/>}/>
  </Route>
  <Route path='*' element={<NotFoundPage/>}/>
 </Routes>
 </div>
  )
}
