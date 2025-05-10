import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { TMeta, TParams, TRecipe } from '~/store/types';

import { Tags } from './constants/tags';

export const recipeApi = createApi({
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://marathon-api.clevertec.ru' }),
    tagTypes: [Tags.RECIPES, Tags.RECIPE],
    endpoints: (builder) => ({
        getRecipeById: builder.query<TRecipe, string>({
            query: (id) => `/recipe/${id}`,
            providesTags: (result) =>
                result ? [{ type: Tags.RECIPE, id: result._id }] : [Tags.RECIPE],
        }),

        getLatestRecipes: builder.query<{ data: TRecipe[]; meta: TMeta }, TParams>({
            query: (params) => ({
                url: '/recipe',
                params: {
                    ...params,
                    sortBy: 'createdAt',
                    sortOrder: 'desc',
                },
            }),
            providesTags: [Tags.RECIPES],
        }),

        getRecipesByCategory: builder.query<{ data: TRecipe[]; meta: TMeta }, TParams>({
            query: ({ categoryId, ...params }) => ({
                url: `/recipe/category/${categoryId}`,
                params: {
                    ...params,
                },
            }),
            providesTags: [Tags.RECIPES],
        }),

        getBestRecipes: builder.query<{ data: TRecipe[]; meta: TMeta }, TParams>({
            query: (params) => ({
                url: '/recipe',
                params: {
                    ...params,
                    sortBy: 'likes',
                    sortOrder: 'desc',
                    allergens: params.allergens?.join(','),
                },
            }),
            providesTags: [Tags.RECIPES],
        }),

        searchRecipes: builder.query<{ data: TRecipe[]; meta: TMeta }, TParams>({
            query: (params) => ({
                url: '/recipe',
                params: {
                    ...params,
                    allergens: params.allergens?.join(','),
                    meat: params.meat?.join(','),
                    garnish: params.garnish?.join(','),
                    subcategoriesIds: params.subcategoriesIds?.join(','),
                },
            }),
            providesTags: [Tags.RECIPES],
        }),
    }),
});

export const {
    useGetRecipesByCategoryQuery,
    useGetLatestRecipesQuery,
    useGetBestRecipesQuery,
    useGetRecipeByIdQuery,
    useSearchRecipesQuery,
    useLazySearchRecipesQuery,
} = recipeApi;
