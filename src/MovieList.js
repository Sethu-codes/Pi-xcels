import React from 'react';

const movies = [
  { id: 1, name: 'Inception' },
  { id: 2, name: 'Interstellar' },
  { id: 3, name: 'The Dark Knight' }
];

const MovieList = () => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
