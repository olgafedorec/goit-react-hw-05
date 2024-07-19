import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { getMovies } from '../movies-api';
import Loader from '../components/Loader/Loader';
import toast from 'react-hot-toast';
import MovieList from '../components/MovieList/MovieList';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

export default function HomePage(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    // const location = useLocation();
    
    useEffect(() => {
      async function fetchMovies() {
        try {
            setLoading(true);
            setError(false);
            const data = await getMovies();
            setMovies(data.results);
            
        } catch (error) { 
            toast.error('Oops! There was an error? please reload this page!')
            setError(true);
        } finally {
            setLoading(false); 
         }
      } 
      fetchMovies()
    }, [])
    return (
        <div>
            <h2 style={{marginTop: 20}}>Trending today</h2>
            {error && <ErrorMessage/>}
            {loading && <Loader/>} 
            {movies.length > 0 && <MovieList movies={movies}/>}
        </div>
    )
}