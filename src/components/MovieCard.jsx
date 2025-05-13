import React from 'react'

const MovieCard = ({movie: {title, vote_average, poster_path, release_date, original_language}}) => {

  const imageURL = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png';
  const voteAverage = vote_average ? vote_average.toFixed(1) : 'N/A';
  const releaseDate = release_date ? release_date.split('-')[0] : 'N/A';

  return (
    <div className='movie-card' alt={title}>
        <img src={imageURL} />
        <div className='mt-4'>
            <h3>{title}</h3>
        </div>
        <div className='content'>
            <div className='rating'>
                <img src='star.svg' alt='Star Icon'/>
                <p>{voteAverage}</p>
            </div>
            <span>•</span>
            <p className='lang'>{original_language}</p>
            <span>•</span>
            <p className='year'>{releaseDate}</p>
        </div>
    </div>
  )
}

export default MovieCard