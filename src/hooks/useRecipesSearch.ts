import { useCallback, useEffect, useMemo } from 'react';

import { useLazySearchRecipesQuery, useSearchRecipesQuery } from '~/query/recipe-api';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setPaginationMeta } from '~/store/recipe-slice';

export const useRecipesSearch = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.recipe.filters);
    const pagination = useAppSelector((state) => state.recipe.pagination);

    const stableArgs = useMemo(
        () => ({
            limit: 8,
            page: pagination.currentPage,
            sortBy: 'createdAt',
            sortOrder: 'asc',
            ...(filters.searchString && { searchString: filters.searchString }),
            ...(filters.allergens.length > 0 && { allergens: filters.allergens }),
            ...(filters.garnish.length > 0 && { garnish: filters.garnish }),
            ...(filters.meat.length > 0 && { meat: filters.meat }),
            ...(filters.subcategoryIds.length > 0 && { subcategoriesIds: filters.subcategoryIds }),
        }),
        [filters, pagination.currentPage],
    );

    const { data, isError, isFetching, isLoading, isSuccess, currentData } = useSearchRecipesQuery({
        ...stableArgs,
    });

    useEffect(() => {
        if (data?.meta) {
            dispatch(
                setPaginationMeta({
                    totalPages: data.meta.totalPages,
                }),
            );
        }
    }, [data, dispatch]);

    return {
        data: data?.data,
        meta: data?.meta,
        currentData,
        isLoading,
        isFetching,
        isError,
        isSuccess,
    };
};

export const useLazyRecipesSearch = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => state.recipe.filters);
    const pagination = useAppSelector((state) => state.recipe.pagination);

    const stableArgs = useMemo(
        () => ({
            limit: 8,
            page: pagination.currentPage,
            sortBy: 'createdAt',
            sortOrder: 'asc',
            ...(filters.searchString && { searchString: filters.searchString }),
            ...(filters.allergens.length > 0 && { allergens: filters.allergens }),
            ...(filters.garnish.length > 0 && { garnish: filters.garnish }),
            ...(filters.meat.length > 0 && { meat: filters.meat }),
            ...(filters.subcategoryIds.length > 0 && { subcategoriesIds: filters.subcategoryIds }),
        }),
        [filters, pagination.currentPage],
    );

    const [trigger, { data, isFetching, isError }] = useLazySearchRecipesQuery();

    const runSearch = useCallback(() => {
        trigger(stableArgs);
    }, [stableArgs, trigger]);

    useEffect(() => {
        if (data?.meta) {
            dispatch(
                setPaginationMeta({
                    totalPages: data.meta.totalPages,
                }),
            );
        }
    }, [data, dispatch]);

    return {
        meta: data?.meta,
        data: data?.data,
        isError,
        isFetching,
        runSearch,
    };
};
