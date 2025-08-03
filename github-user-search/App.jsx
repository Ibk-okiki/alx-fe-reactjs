
const apiUrl = import.meta.env.VITE_GITHUB_API_URL;
const response = await axios.get(`${apiUrl}/users/${username}`);
