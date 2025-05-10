import { createSlice } from '@reduxjs/toolkit';

import { TRecipe } from './types';

export type RecipeLoading = {
    recipe: TRecipe | null;
    loading: boolean;
    error: boolean;
    filters: {
        categoryTitle: string[];
        subcategoryIds: string[];
        allergens: string[];
        meat: string[];
        garnish: string[];
        authors: string[];
        searchString: string;
    };
    pagination: {
        currentPage: number;
        limit: number;
        totalPages?: number;
    };
};

const initialState: RecipeLoading = {
    recipe: null,
    loading: false,
    error: false,
    filters: {
        categoryTitle: [],
        subcategoryIds: [],
        allergens: [],
        meat: [],
        garnish: [],
        authors: [],
        searchString: '',
    },
    pagination: {
        currentPage: 1,
        limit: 8,
    },
};

const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
        setRecipe: (state, action) => {
            state.recipe = action.payload;
            state.loading = false;
            state.error = false;
        },
        setCurrentPage: (state, action) => {
            state.pagination.currentPage = action.payload;
        },
        setSearchString: (state, action) => {
            state.filters.searchString = action.payload;
        },
        setCategoryFilter: (state, action) => {
            state.filters.categoryTitle = action.payload;
        },
        setSubCategoryFilter: (state, action) => {
            state.filters.subcategoryIds = action.payload;
        },
        setAllergensFilter: (state, action) => {
            state.filters.allergens = action.payload;
        },
        setMeatFilter: (state, action) => {
            state.filters.meat = action.payload;
        },
        setGarnishFilter: (state, action) => {
            state.filters.garnish = action.payload;
        },
        setAuthorsFilter: (state, action) => {
            state.filters.authors = action.payload;
        },
        setPaginationMeta: (state, action) => {
            state.pagination.totalPages = action.payload.totalPages;
        },
    },
});

export const {
    setRecipe,
    setCurrentPage,
    setSearchString,
    setCategoryFilter,
    setSubCategoryFilter,
    setAllergensFilter,
    setMeatFilter,
    setGarnishFilter,
    setAuthorsFilter,
    setPaginationMeta,
} = recipeSlice.actions;
export default recipeSlice.reducer;
