import { useParams, NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense, useRef } from 'react';
import toast from 'react-hot-toast';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { getMovieById } from '../movies-api';
import MovieDetails from '../components/MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
const { movieId } = useParams();
const [movie, setMovie] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(false);
const location = useLocation();
const navLinkStyle = {color: "black",};
const backLinkRef = useRef(location.state ?? "/")

useEffect(() => {
 async function fetchMovies() {
    try{
        setLoading(true);
        setError(false);
        const data = await getMovieById(movieId);
        setMovie(data);
    } catch(error) {
        toast.error('Oops! There was an error? please reload this page!')
        setError(true);
    } finally {
        setLoading(false); 
     }
 }

 fetchMovies();

}, [movieId])

    return (
        <div style={
            {
                marginTop: 12,
            }
        }>
            {error && <ErrorMessage/>}
            {loading && <Loader/>} 
            <button >
                <Link style={
                    {
                    textDecoration: "none",
                    color: "black",
                    }
                     } to={backLinkRef.current}>Go back</Link>
            </button>
       {movie && <MovieDetails movie={movie}/>}
       <ul>
        <li>
            <NavLink style={navLinkStyle} to="cast" >Cast</NavLink>

        </li>
        <li>
            <NavLink style={navLinkStyle} to="reviews" >Reviews</NavLink>
        
        </li>
       </ul>
       <Suspense fallback={<Loader/>}>
         <Outlet/>
       </Suspense>
        </div> 
    )
}