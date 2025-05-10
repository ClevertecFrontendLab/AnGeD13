import { createSlice } from '@reduxjs/toolkit';

import { RecipesSlice } from './types';

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
    } as RecipesSlice,
    reducers: {},
});

export default recipesSlice.reducer;
