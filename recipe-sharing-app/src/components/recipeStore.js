import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  setRecipes: (newRecipes) => set({ recipes: newRecipes })

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

  // ✅ Set entire recipe list manually
  setRecipes: (recipes) => {
    set({
      recipes,
      filteredRecipes: get().filterRecipes(recipes, get().searchTerm),
    });
  },

  // Set search term
  setSearchTerm: (term) => {
    set({
      searchTerm: term,
      filteredRecipes: get().filterRecipes(get().recipes, term),
    });
  },

  // Pure filtering function
  filterRecipes: (recipes, term) => {
    const lower = term.toLowerCase();
    return recipes.filter(
      (recipe) =>
        recipe.title.toLowerCase().includes(lower) ||
        recipe.description.toLowerCase().includes(lower)
    );
  },
}));
