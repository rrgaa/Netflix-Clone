import React from 'react'

function MovieCard({ title, image, rating }) {
  return (
    <div className='Movie-Card'>
       <div className="movie-card">
      <img src={image} alt={title} className="movie-card__image" />
      <div className="movie-card__content">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__rating">Rating: {rating}</p>
      </div>
    </div>
    </div>
  )
}

export default MovieCard
