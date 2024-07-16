import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCast } from '../../movies-api';

export default function MovieCast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

    useEffect(() => {
        async function fetchCast() {
            try {
                const castData = await getMovieCast(movieId);
                setCast(castData.cast || []);
            } catch(error) {
                console.error("Failed to fetch movie cast", error);
            }
        }
        fetchCast();
    }, [movieId]);

    return (
<div>
    {cast.length > 0 ? (
 <ul>
    {cast.map((actor) => (
        <li key={actor.castId}>
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