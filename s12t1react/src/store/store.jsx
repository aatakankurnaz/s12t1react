import { legacy_createStore as createStore } from "redux";
import { TOGGLE_DARK_MODE } from "./actions";
import { SET_LANGUAGE } from "./actions";


export const savedDarkMode = localStorage.getItem('darkMode') === 'true';


const initialState = {
  isDarkMode: savedDarkMode,
  language: "tr"
}

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newDarkMode = !state.isDarkMode;
      localStorage.setItem('darkMode', newDarkMode);
      return { ...state, isDarkMode: !state.isDarkMode };
    case SET_LANGUAGE:

      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export const store = createStore(GlobalReducer)
