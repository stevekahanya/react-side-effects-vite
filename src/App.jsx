import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://v2.jokeapi.dev/joke/Programming?type=single";

  // The fetching logic
  const fetchJoke = async () => {
    setLoading(true);
    setError(null); // Reset error state before a new attempt
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      setError("Failed to fetch a joke. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch on initial mount
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      
      {/* Display Error if it exists, otherwise show the JokeDisplay */}
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <JokeDisplay joke={joke} loading={loading} />
      )}

      <FetchButton fetchJoke={fetchJoke} loading={loading} />
    </div>
  );
}

export default App;