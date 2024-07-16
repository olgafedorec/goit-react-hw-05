import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../movies-api';
import MovieDetails from '../components/MovieDetails/MovieDetails';


//не забути зробити loader і error

export default function MovieDetailsPage() {
const { movieId } = useParams();
const [movie, setMovie] = useState(null);

useEffect(() => {
 async function fetchMovies() {
    try{
        const data = await getMovieById(movieId);
        setMovie(data);
    } catch(error) {console.error("Failed to fetch movie details", error);}
 }

 fetchMovies();

}, [movieId])

    return (
        <div style={
            {
                marginTop: 12,
            }
        }>
       {movie && <MovieDetails movie={movie}/>}

       <ul>
        <li>
            <NavLink to="cast">Cast</NavLink>

        </li>
        <li>
            <NavLink to="reviews">Reviews</NavLink>
        
        </li>
       </ul>
       <Outlet/>
        </div> 
    )
}