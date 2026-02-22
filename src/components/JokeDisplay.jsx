// Step 1: Accept props
const JokeDisplay = ({ joke, loading }) => {
  return (
    <div className="joke-container">
      {/* Step 2 & 3: Conditional Rendering */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>{joke}</p>
      )}
    </div>
  );
};

export default JokeDisplay;