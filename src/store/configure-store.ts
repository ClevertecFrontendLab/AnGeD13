import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { categoryApi } from '~/query/category-api';
import { apiSlice } from '~/query/create-api';
import { recipeApi } from '~/query/recipe-api';

import appReducer, { appSlice } from './app-slice';
import categoriesReducer from './categories-slice';
import categoryRecipesReducer from './category-recipes-slice';
import recipeReducer from './recipe-slice';
import recipesReducer from './recipes-slice';

// TODO
const isProduction = false;
const rootReducer = combineReducers({
    [appSlice.name]: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    categories: categoriesReducer,
    recipes: recipesReducer,
    recipe: recipeReducer,
    categoryRecipes: categoryRecipesReducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            apiSlice.middleware,
            categoryApi.middleware,
            recipeApi.middleware,
        ),
    devTools: !isProduction,
});

export type RootState = ReturnType<typeof store.getState>;
