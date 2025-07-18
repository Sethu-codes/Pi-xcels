import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('/api/movies');
        const payload = await response.json();
        setMovies(payload.data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🎬 Movie List</h1>
        {movies.length === 0 ? (
          <p>Loading movies...</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {movies.map((movie) => (
              <li key={movie.id} style={{ margin: '10px 0', fontSize: '18px' }}>
                🎞️ {movie.name}
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
