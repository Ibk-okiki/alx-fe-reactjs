import React from 'react';

/**
 * A component that renders the search input form.
 * @param {object} props - The props passed from the parent component.
 * @param {string} props.searchTerm - The current value of the search input.
 * @param {function} props.setSearchTerm - The function to update the search term state.
 * @param {function} props.handleSearch - The function to execute when the form is submitted.
 * @returns {JSX.Element} The search form component.
 */
const Search = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter a GitHub username"
        className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        aria-label="GitHub username search input"
      />
      <button 
        type="submit" 
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        aria-label="Search button"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

