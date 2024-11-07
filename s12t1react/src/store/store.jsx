import { legacy_createStore as createStore } from "redux";


const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE"
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
export const toggleDarkMode = () => {
  return { type: TOGGLE_DARK_MODE }
}
const initialState = {
  isDarkMode: savedDarkMode
}

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newDarkMode = !state.isDarkMode;
      localStorage.setItem('darkMode', newDarkMode);
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
};

export const store = createStore(darkModeReducer)
