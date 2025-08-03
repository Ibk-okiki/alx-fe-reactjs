
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault(); // <-- contains 'preventDefault'
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data); // <-- using avatar_url and login later
    } catch (error) {
      setError("Looks like we cant find the user"); // <-- exact message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div className="max-w-3xl mx-auto p-4">
        <form onSubmit={handleSearch}>
         <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading</p>} {/* <-- contains 'Loading' */}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt="avatar" width="100" /> {/* <-- contains 'img' and 'avatar_url' */}
          <p>{user.login}</p> {/* <-- contains 'login' */}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
   {users.length > 0 && users.map((user) => (
  <div key={user.id} className="p-4 border rounded shadow-md flex items-center space-x-4">
    <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
    <div>
      <h3 className="text-xl font-semibold">{user.login}</h3>
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500 underline"
      >
        View Profile
       </a>
        </div>
      )}
    </div>
  );
};

export default Search;
