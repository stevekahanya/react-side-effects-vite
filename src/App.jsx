import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  // Step 1: Create state variables
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  // Step 3: Define the fetch function
  const fetchJoke = () => {
    setLoading(true);
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setJoke("Oops! Failed to fetch a joke.");
        setLoading(false);
      });
  };

  // Step 2: Use useEffect to fetch on mount
  useEffect(() => {
    fetchJoke();
  }, []); // Run once on mount

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass joke and loading as props */}
      <JokeDisplay joke={joke} loading={loading} />
      {/* Step 5: Pass fetchJoke function as a prop */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;