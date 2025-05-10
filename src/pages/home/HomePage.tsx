import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { useEffect } from 'react';

import AllRecipes from '~/components/allRecipes/AllRecipes';
import BestSection from '~/components/bestSection/BestSection';
import Blogs from '~/components/blogs/Blogs';
import NewRecipes from '~/components/newRecipes/NewRecipes';
import PageHeader from '~/components/pageHeader/PageHeader';
import RelevantSection from '~/components/relevantSection/RelevantSection';
import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useRecipesSearch } from '~/hooks/useRecipesSearch';
import { useToast } from '~/hooks/useToast';
import { useAppSelector } from '~/store/hooks';

export default function HomePage() {
    const { isSearching } = useContext(BreadcrumbsContext);
    const { data: filteredRecipes, isError } = useRecipesSearch();
    const filters = useAppSelector((state) => state.recipe.filters);
    const { showError } = useToast();

    console.log('filtered', filteredRecipes);
    console.log('filters', filters);

    const isMatching = () => {
        if (filters.searchString) {
            if (filteredRecipes && filteredRecipes.length > 0) {
                return true;
            }
            return false;
        }
        return null;
    };

    useEffect(() => {
        if (isError) {
            showError('Ошибка сервера', 'Попробуйте поискать снова попозже');
        }
    }, [isError, showError]);

    return (
        <>
            <PageHeader title='Приятного аппетита!' isTitleMatch={isMatching()} />
            <Flex
                flexDirection='column'
                rowGap={{
                    base: '32px',
                    lg: '40px',
                }}
            >
                {isSearching && filteredRecipes && (
                    <AllRecipes recipes={filteredRecipes} filterText={filters.searchString} />
                )}
                {!isSearching && (
                    <>
                        <NewRecipes />
                        <BestSection />
                        <Blogs />
                        <RelevantSection />
                    </>
                )}
            </Flex>
        </>
    );
}
