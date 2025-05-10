import { createSlice } from '@reduxjs/toolkit';

import { RecipesSlice } from './types';

const categoryRecipesSlice = createSlice({
    name: 'CategoryrRecipes',
    initialState: {
        recipes: [],
    } as RecipesSlice,
    reducers: {},
});

export default categoryRecipesSlice.reducer;
