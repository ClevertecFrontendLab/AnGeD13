import { createSlice } from '@reduxjs/toolkit';

import { TCategory } from './types';

export type CategorySlice = {
    categories: TCategory[];
    currentCategory: string | null;
};

const initialState: CategorySlice = {
    categories: [],
    currentCategory: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
        },
    },
});

export const { setCategories, setCurrentCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
