export function setSearchedMeals(state, meals) {
  state.searchedMeals = meals || [];
}

export function setMealsByLetter(state, meals) {
  state.searchMealsByLetter = meals || [];
}

export function setMealsByIngredient(state, meals) {
  state.mealsByIngredient = meals || [];
}
