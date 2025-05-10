import { createSelector } from '@reduxjs/toolkit/react';

import { ApplicationState } from '~/store/configure-store';

export const selectGlobalLoading = createSelector(
    (state: ApplicationState) => state,
    (state) => {
        const apis = [state.recipeApi, state.categoryApi].flatMap((api) => [
            api.queries,
            api.mutations,
        ]);

        return apis.some((api) =>
            Object.values(api).some(
                (item) => item?.status === 'pending' && item.endpointName !== 'searchRecipes',
            ),
        );
    },
);
