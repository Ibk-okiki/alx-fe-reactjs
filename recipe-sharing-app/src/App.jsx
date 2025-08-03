import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import HomePage from './components/HomePage'; // assume this lists recipes

function App() {
  return (
    <Router>
      <div className="App">
        <h1>🍲 Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
