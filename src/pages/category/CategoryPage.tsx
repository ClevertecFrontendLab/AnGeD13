import { Flex } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import AllRecipes from '~/components/allRecipes/AllRecipes';
import PageHeader from '~/components/pageHeader/PageHeader';
import RelevantSection from '~/components/relevantSection/RelevantSection';
import { NOT_FOUND } from '~/constants/paths';
import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useRecipesSearch } from '~/hooks/useRecipesSearch';
import { useGetCategoriesQuery } from '~/query/category-api';
import { setCategories } from '~/store/categories-slice';
import { useAppDispatch, useAppSelector } from '~/store/hooks';

export default function CategoryPage() {
    const { data } = useGetCategoriesQuery();
    const dispatch = useAppDispatch();
    const categories = data?.filter((category) => category.subCategories) || [];
    const params = useParams();
    const filters = useAppSelector((state) => state.recipe.filters);
    const navigate = useNavigate();
    const cashed = localStorage.getItem('navbar-categories');
    const { isSearching } = useContext(BreadcrumbsContext);

    useEffect(() => {
        if (!categories && cashed) {
            dispatch(setCategories(cashed));
        }
    });

    const { category, subcategory } = params;

    const currentCategory = categories?.find((item) => item.category === category);
    const currentSubcategory = currentCategory?.subCategories?.find(
        (item) => item.category === subcategory,
    );
    const subcategoryIndex = currentCategory?.subCategories.findIndex(
        (cat) => cat.category === currentSubcategory?.category,
    );

    useEffect(() => {
        if (!currentCategory || !currentSubcategory) {
            navigate(`${NOT_FOUND}`, { replace: true });
        }
    }, [navigate, currentCategory, currentSubcategory]);

    const { data: filteredRecipes } = useRecipesSearch();

    console.log('filtered in category', filteredRecipes);

    const isMatching = () => {
        if (filters.searchString) {
            if (filteredRecipes && filteredRecipes.length > 0) {
                return true;
            }
            return false;
        }
        return null;
    };

    if (currentCategory) {
        return (
            <>
                <PageHeader
                    title={currentCategory.title}
                    categoryDescription={currentCategory.description}
                    isTitleMatch={isMatching()}
                />
                <Flex flexDirection='column' rowGap='40px'>
                    {isSearching && filteredRecipes && (
                        <AllRecipes
                            recipes={filteredRecipes}
                            filterText={filters.searchString}
                            category={currentCategory.title}
                            subIndex={subcategoryIndex}
                            tabs={currentCategory.subCategories}
                        />
                    )}
                    {!isSearching && filteredRecipes && (
                        <>
                            <AllRecipes
                                recipes={filteredRecipes}
                                category={currentCategory.title}
                                subIndex={subcategoryIndex}
                                tabs={currentCategory.subCategories}
                            />
                            <RelevantSection />
                        </>
                    )}
                </Flex>
            </>
        );
    }
}
