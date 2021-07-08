//This file is formatted by Prettier-Code formatter

// axios to make http requests
import axios from "axios";

// API from where we got the data for the categories
let API = "https://shady-auth-api.herokuapp.com/api/v1/categories";

// the initial state
let initialState = {
  categories: [],
  activeCategory: null,
};

/**
 *  categoryReducer reducer.
 */
const categoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  let activeCategory, categories;

  switch (type) {
    case "ACTIVATE":
      activeCategory = payload;
      categories = state.categories;
      return { activeCategory, categories };
    case "All_Products":
      activeCategory = "all";
      categories = state.categories;
      return { activeCategory, categories };
    case "Get_Categories":
      return {
        categories: payload,
        activeCategory: initialState.activeCategory,
      };
    case "RESET":
      return { ...state, activeCategory: initialState.activeCategory };

    default:
      return state;
  }
};

// export the setActiveCategory functionality
export const setActiveCategory = (category) => {
  return {
    type: "ACTIVATE",
    payload: category,
  };
};

// export the allProducts functionality
export const allProducts = () => {
  return {
    type: "All_Products",
  };
};

// export the reset functionality
export const reset = () => {
  return {
    type: "RESET",
  };
};

//Fetch the data from API
export const getRemoteData = () => async (dispatch) => {
  let response = await axios.get(API);
  dispatch(getAction(response.data));
};

export const getAction = (data) => {
  return {
    type: "Get_Categories",
    payload: data,
  };
};

export default categoryReducer;
