import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../movies-api';

export default function MovieReview() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]); 

    useEffect(() => {
        async function fetchReviews() {
            try {
                const reviewData = await getMovieReviews(movieId);
                setReviews(reviewData.results || []);
            } catch(error) {
                console.error("Failed to fetch movie reviews", error);
            }
        }
        fetchReviews();
    }, [movieId]);

    return (
<div>
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
        <p>No reviews available.</p>
    )}
</div>
    )
}