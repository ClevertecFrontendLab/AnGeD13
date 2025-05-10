import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { setCategories } from '~/store/categories-slice';
import { TCategory } from '~/store/types';

import { Tags } from './constants/tags';

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://marathon-api.clevertec.ru' }),
    tagTypes: [Tags.CATEGORIES, Tags.CATEGORY],
    endpoints: (build) => ({
        getCategories: build.query<TCategory[], void>({
            query: () => '/category',
            providesTags: [Tags.CATEGORIES],
            onQueryStarted: async (_arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled;
                    dispatch(setCategories(data));
                    localStorage.setItem('navbar-categories', JSON.stringify(data));
                } catch (_) {
                    const cachedData = localStorage.getItem('navbar-categories');
                    if (cachedData) {
                        const categories: TCategory[] = JSON.parse(cachedData);
                        dispatch(setCategories(categories));
                        dispatch(
                            categoryApi.util.upsertQueryData(
                                'getCategories',
                                undefined,
                                categories,
                            ),
                        );
                    }
                }
            },
        }),
        getCategoryById: build.query<TCategory, string>({
            query: (id) => `/category/${id}`,
            providesTags: (_result, _error, id) => [{ type: Tags.CATEGORY, id }],
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch (_) {
                    const cachedData = localStorage.getItem('navbar-categories');
                    if (cachedData) {
                        const categories: TCategory[] = JSON.parse(cachedData);
                        const category = categories.find((c) => c._id === id);
                        if (category) {
                            dispatch(
                                categoryApi.util.upsertQueryData('getCategoryById', id, category),
                            );
                        }
                    }
                }
            },
        }),
    }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;
