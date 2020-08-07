import axios from "axios";

export const getRecipes = () => {
  return axios.get("http://starlord.hackerearth.com/recipe");
};
