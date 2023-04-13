import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
  searchMeals = () => {
    axiosClient.get(`/search.php?s=${keyword}`).then(({ data }) => {
      commit("setSearchedMeals", data.meals);
    });
  };
}
