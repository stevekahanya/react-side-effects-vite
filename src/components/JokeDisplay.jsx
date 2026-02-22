const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Requirement: Only one p tag for the joke or loading message */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
};

export default JokeDisplay;