import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

// Selectors
export const getTheme = (state) => state.theme;

// Reducers and actions
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
