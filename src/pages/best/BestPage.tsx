import { Button, Flex } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import AllRecipes from '~/components/allRecipes/AllRecipes';
import PageHeader from '~/components/pageHeader/PageHeader';
import RelevantSection from '~/components/relevantSection/RelevantSection';
import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useRecipesSearch } from '~/hooks/useRecipesSearch';
import { useScreenWidth } from '~/hooks/useScreenWidth';
import { useGetBestRecipesQuery } from '~/query/recipe-api';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { setCurrentPage } from '~/store/recipe-slice';
import { TRecipe } from '~/store/types';

export default function BestPage() {
    const { screenWidth } = useScreenWidth();
    const { isSearching } = useContext(BreadcrumbsContext);
    const filters = useAppSelector((state) => state.recipe.filters);
    const dispatch = useAppDispatch();
    const [recipes, setRecipes] = useState<TRecipe[]>([]);
    const pagination = useAppSelector((state) => state.recipe.pagination);

    const { data: filteredRecipes } = useRecipesSearch();

    const isMatching = () => {
        if (filters.searchString) {
            if (filteredRecipes && filteredRecipes.length > 0) {
                return true;
            }
            return false;
        }
        return null;
    };

    const { data, currentData } = useGetBestRecipesQuery(
        {
            limit: 8,
            page: pagination.currentPage,
        },
        {
            refetchOnMountOrArgChange: true,
        },
    );

    const hasMore = data?.meta ? pagination.currentPage < data.meta.totalPages : false;

    useEffect(() => {
        if (currentData?.data) {
            if (pagination.currentPage === 1) {
                setRecipes(currentData.data);
            } else {
                setRecipes((prev) => [...prev, ...currentData.data]);
            }
        }
    }, [currentData?.data, pagination.currentPage]);

    console.log('pagination in best', pagination.currentPage, recipes, data?.data);

    useEffect(() => {
        console.log('cur 1');
        dispatch(setCurrentPage(1));
    }, [dispatch]);

    const loadMore = () => {
        if (hasMore) {
            console.log('load more');
            dispatch(setCurrentPage(pagination.currentPage + 1));
        }
    };

    return (
        <>
            <PageHeader title='Самое сочное' isTitleMatch={isMatching()} />
            <Flex flexDirection='column' rowGap='40px'>
                {isSearching && (
                    <AllRecipes recipes={recipes} filterText={filters.searchString} page='best' />
                )}
                {!isSearching && (
                    <>
                        <AllRecipes recipes={recipes} page='best' />
                        {hasMore && (
                            <Flex justifyContent='center' paddingTop='16px'>
                                {screenWidth >= 1440 ? (
                                    <Button
                                        onClick={loadMore}
                                        data-test-id='load-more-button'
                                        w='152px'
                                        h='40px'
                                        bg='#b1ff2e'
                                        borderRadius='6px'
                                        paddingInline='16px'
                                        fontFamily='font'
                                        fontWeight={600}
                                        fontSize={16}
                                        lineHeight='150%'
                                        color='#000'
                                    >
                                        Загрузить еще
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={loadMore}
                                        data-test-id='load-more-button'
                                        w='152px'
                                        h='40px'
                                        bg='#b1ff2e'
                                        borderRadius='6px'
                                        paddingInline='16px'
                                        fontFamily='font'
                                        fontWeight={600}
                                        fontSize={16}
                                        lineHeight='150%'
                                        color='#000'
                                    >
                                        Загрузка
                                    </Button>
                                )}
                            </Flex>
                        )}
                        <RelevantSection />
                    </>
                )}
            </Flex>
        </>
    );
}
