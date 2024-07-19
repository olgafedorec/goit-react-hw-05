import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getMovieReviews } from '../../movies-api';

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchReviews() {
            try {
                setLoading(true);
                setError(false); 
                const reviewData = await getMovieReviews(movieId);
                setReviews(reviewData.results || []);
            } catch(error) {
                toast.error('Oops! There was an error? please reload this page!')
                setError(true);
            } finally {
                setLoading(false); 
             } 
        }
        fetchReviews();
    }, [movieId]);

    return (
<div>
{error && <ErrorMessage/>}
{loading && <Loader/>}
    {reviews.length > 0 ? (
         <ul>
         {reviews.map((review) => (
             <li key={review.id}>
                 <p><strong>{review.author_details.username}</strong></p>
                 <p>{review.content}</p>
             </li>
         ))}
     </ul>
    ) : (
        <p>We don`t have any reviews for this movie.</p>
    )}
</div>
    )
}