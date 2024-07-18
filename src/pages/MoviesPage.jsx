import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import toast from 'react-hot-toast';
import MovieList from '../components/MovieList/MovieList';
import TitleFilter from '../components/TitleFilter/TitleFilter';
import { searchMovie } from '../movies-api';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export default function MoviesPage(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const titleFilter = searchParams.get("original_title") ?? "";
  
  
  const changeMovieFilter = async (newTitle) => {
    searchParams.set("original_title", newTitle);
    setSearchParams(searchParams);
   
  }
  
  useEffect(() => {
    if (titleFilter === "") {
      setMovies([]);
      return;
    }
    async function fetchMovies() {
      try {
        setLoading(true);
        setError(false);
        const data = await searchMovie(titleFilter);
        setMovies(data);
      } catch (error) {
        toast.error('Oops! There was an error? please reload this page!')
        setError(true);
      } finally {
        setLoading(false); 
     }
    }
      fetchMovies();
 
  }, [titleFilter]);
    
    return (
      <div>
      {error && <ErrorMessage/>}
      <TitleFilter  onFilter={changeMovieFilter} />
      {loading && <Loader/>}
      {movies.length > 0 && (
        <MovieList movies={movies}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link 
                to={`/movies/${movie.id}`} 
                state={{ from: { pathname: "/movies", search: `?original_title=${titleFilter}` } }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </MovieList>
      )}
      </div>
  )
  }  

  
  
