import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Set all recipes
  setRecipes: (newRecipes) => {
    set({
      recipes: newRecipes,
      filteredRecipes: get().filterRecipes(newRecipes, get().searchTerm),
    });
  },

  // Filter recipes by search term
  filterRecipes: (recipes, searchTerm) => {
    return recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  },

  // Set search term and update filtered results
  setSearchTerm: (term) => {
    set({
      searchTerm: term,
      filteredRecipes: get().filterRecipes(get().recipes, term),
    });
  },

  // Add new recipe
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({
      recipes: updated,
      filteredRecipes: get().filterRecipes(updated, get().searchTerm),
    });
  },

  // Delete recipe
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => r.id !== id);
    set({
      recipes: updated,
      filteredRecipes: get().filterRecipes(updated, get().searchTerm),
      favorites: get().favorites.filter(favId => favId !== id),
    });
  },

  // Update recipe
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({
      recipes: updated,
      filteredRecipes: get().filterRecipes(updated, get().searchTerm),
    });
  },

  // Add to favorites
  addFavorite: (recipeId) => {
    if (!get().favorites.includes(recipeId)) {
      set({ favorites: [...get().favorites, recipeId] });
    }
  },

  // Remove from favorites
  removeFavorite: (recipeId) => {
    set({
      favorites: get().favorites.filter(id => id !== recipeId),
    });
  },

  // Generate mock recommendations based on favorites
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
