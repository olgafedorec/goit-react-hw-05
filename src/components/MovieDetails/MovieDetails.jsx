import css from './MovieDetails.module.css';

export default function MovieDetails({ movie }) {

  return (
        <div>
          
        <div className={css.info}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
       <div className={css.details}>
       <h3>{movie.title}</h3>
        <h4>Genres:</h4>
        <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <h4>Overview:</h4>
          <p>{movie.overview}</p>
       </div>
        </div>
       </div> 
    )
}