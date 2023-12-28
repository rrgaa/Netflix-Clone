import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../Components/MovieCard';
import Header from '../Components/Header';

function Favorite() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Ganti dengan API Key TMDb Anda
    const apiKey = '075d2ba6f2c668234a582f5f68e688e2';
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

    axios.get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='Favorite-List' id='favorite'>
      <Header/>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            rating={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
