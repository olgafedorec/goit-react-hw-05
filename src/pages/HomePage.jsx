import { useEffect, useState } from 'react';
import { getMovies } from '../movies-api';
import MovieList from '../components/MovieList/MovieList';

export default function HomePage(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      async function fetchMovies() {
        try {
            const data = await getMovies();
            setMovies(data.results);
        } catch (error) { console.error("Failed to fetch movies", error);}
      } 
      fetchMovies()
    }, [])
    return (
        <div>
            {movies.length > 0 && <MovieList movies={movies}/>}
        </div>
    )
}