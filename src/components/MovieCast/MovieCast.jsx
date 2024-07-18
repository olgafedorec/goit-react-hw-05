import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMovieCast } from '../../movies-api';

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchCast() {
            try {
                setLoading(true);
                setError(false); 
                const castData = await getMovieCast(movieId);
                setCast(castData.cast || []);
            } catch(error) {
                toast.error('Oops! There was an error? please reload this page!')
                setError(true);
            } finally {
                setLoading(false); 
             } 
        }
        fetchCast();
    }, [movieId]);

    return (
<div>
{error && <ErrorMessage/>}
{loading && <Loader/>}
    {cast.length > 0 ? (
 <ul>
    {cast.map((actor) => (
        <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
              <p><strong>{actor.name}</strong></p>
              <p>{actor.character}</p>
        </li>
    ))}
 </ul>
    ) : (<p>No cast available.</p>)}
   
</div>
    )
}