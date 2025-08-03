import axios from 'axios';

// The base URL for the GitHub user API
const API_URL = 'https://api.github.com/users';

/**
 * Fetches a user's data from the GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} A promise that resolves to the user's data object.
 * @throws Will throw an error if the user is not found or if there's a network issue.
 */
export const fetchUserData = async (username) => {
  // We use a try/catch block to handle potential errors from the API call.
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    // If the API returns an error (like a 404 Not Found), we throw a new error
    // to be caught by the component that called this function.
    console.error("Error fetching user data:", error);
    throw new Error('User not found');
  }
};

