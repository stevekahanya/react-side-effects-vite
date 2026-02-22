const FetchButton = ({ fetchJoke, loading }) => {
  return (
    <button 
      className="fetch-button" 
      onClick={fetchJoke}
      disabled={loading} // Prevent multiple clicks during a fetch
    >
      {loading ? "Fetching..." : "Get a New Joke"}
    </button>
  );
};

export default FetchButton;