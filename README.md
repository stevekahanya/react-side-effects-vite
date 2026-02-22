🚀 Lab: React Side Effects (Joke Generator)
📌 Overview
This lab focuses on mastering the useEffect hook to manage side effects—specifically fetching data from an external API. You will build a "Programming Joke Generator" that interacts with the JokeAPI.

🛠 Setup Instructions
Install Dependencies:

Bash
npm install
Start Development Server:

Bash
npm run dev
The app will be available at http://localhost:5173.

Run Tests:

Bash
npm run test
Use this to verify your implementation against the lab requirements.

🎯 Deliverables
1. Initial Data Fetch
Action: When the application first mounts, trigger a GET request.

Endpoint: https://v2.jokeapi.dev/joke/Programming?type=single

Goal: Display a programming joke immediately upon page load.

2. Manual Refresh
Action: Implement an event handler for the "New Joke" button.

Goal: Fetch a fresh joke from the API and update the state, replacing the previous joke.

3. Loading States
Action: Use a boolean state (e.g., isLoading) to track the fetch status.

Goal: Display a Loading... message while the asynchronous request is pending to improve UX.

4. Error Handling
Action: Use try...catch or .catch() blocks.

Goal: Gracefully display an error message in the UI if the API is unreachable or returns an error.

💡 Best Practices Applied
useState: Used for managing the joke string, isLoading boolean, and error messages.

useEffect: Utilized with an empty dependency array [] to ensure the initial fetch only runs once on mount.

Component Architecture: * App: Manages state and logic (The "Container").

JokeDisplay: Renders the text (The "Presenter").

FetchButton: Handles the user interaction.

🧪 Testing Checklist
[ ] Does a joke appear within 2 seconds of page load?

[ ] Does clicking "Get a New Joke" change the text?

[ ] Does the "Loading..." text appear momentarily during the fetch?

[ ] Are there any console errors or memory leaks?
