import { Flex } from '@chakra-ui/react';
import { useContext, useEffect, useMemo, useState } from 'react';

import AllRecipes from '~/components/allRecipes/AllRecipes';
import PageHeader from '~/components/pageHeader/PageHeader';
import RelevantSection from '~/components/relevantSection/RelevantSection';
import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { RecipeCard, recipesVegan } from '~/data/mainRecipesCard';
import { menuList } from '~/data/menu';

export default function CategoryPage() {
    const { tabs } = useContext(BreadcrumbsContext);
    const categoryTabs = menuList.find((obj) => obj.title === tabs.title);

    const initRecipes = useMemo(() => {
        const categoryRecipes = recipesVegan.filter((item) => item.category.includes(tabs.title));
        const curSubcategory = categoryTabs?.items[tabs.index];
        let withSubcategoriesRecipes;
        if (curSubcategory) {
            withSubcategoriesRecipes = categoryRecipes.filter((item) =>
                item.subcategory.includes(curSubcategory),
            );
        } else {
            withSubcategoriesRecipes = categoryRecipes;
        }

        return withSubcategoriesRecipes;
    }, [tabs, categoryTabs]);
    const {
        filterRecipeTitle,
        filterGlobalMeatType,
        filterGlobalSideType,
        filterGlobalAuthor,
        filterGlobalCategories,
    } = useContext(BreadcrumbsContext);

    const [filteredRecipes, setFilteredRecipes] = useState<RecipeCard[]>([]);
    const { filterIngredients } = useContext(BreadcrumbsContext);

    useEffect(() => {
        const areFilters =
            filterRecipeTitle ||
            filterIngredients.length > 0 ||
            filterGlobalMeatType.length > 0 ||
            filterGlobalSideType.length > 0 ||
            filterGlobalAuthor.length > 0 ||
            filterGlobalCategories.length > 0;
        if (areFilters) {
            const filtered = initRecipes.filter((item) => {
                const matchTitle = item.title.toLowerCase().includes(filterRecipeTitle);

                let containsAllIngredients = false;
                if (filterIngredients.length > 0) {
                    containsAllIngredients = filterIngredients.some((ingredient) =>
                        item.ingredients?.some((i) =>
                            i.title.toLowerCase().includes(ingredient.toLowerCase()),
                        ),
                    );
                }

                let containsMeatTypes = true;
                if (filterGlobalMeatType.length > 0) {
                    if (item.meat) {
                        containsMeatTypes = filterGlobalMeatType.includes(item.meat);
                    } else {
                        containsMeatTypes = false;
                    }
                }

                let containsSideTypes = true;
                if (filterGlobalSideType.length > 0) {
                    if (item.side) {
                        containsSideTypes = filterGlobalSideType.includes(item.side);
                    } else {
                        containsSideTypes = false;
                    }
                }

                let containsAuthors = true;
                if (filterGlobalAuthor.length > 0) {
                    if (item.author) {
                        containsAuthors = filterGlobalAuthor.includes(item.author);
                    } else {
                        containsAuthors = false;
                    }
                }

                let containsCategories = true;
                if (filterGlobalCategories.length > 0) {
                    containsCategories = item.category.some((category) =>
                        filterGlobalCategories.includes(category),
                    );
                } else {
                    containsCategories = true;
                }

                return (
                    matchTitle &&
                    !containsAllIngredients &&
                    containsMeatTypes &&
                    containsSideTypes &&
                    containsAuthors &&
                    containsCategories
                );
            });

            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes([]);
        }
    }, [
        filterRecipeTitle,
        initRecipes,
        filterIngredients,
        filterGlobalSideType,
        filterGlobalMeatType,
        filterGlobalAuthor,
        filterGlobalCategories,
    ]);

    return (
        <>
            <PageHeader title='Веганская кухня' veganDescription={true} />
            <Flex flexDirection='column' rowGap='40px'>
                {filteredRecipes.length > 0 && (
                    <AllRecipes
                        recipes={filteredRecipes}
                        filterText={filterRecipeTitle}
                        tabs={{
                            category: tabs.title,
                            items: categoryTabs?.items,
                            index: tabs.index,
                        }}
                    />
                )}
                {filteredRecipes.length === 0 && (
                    <>
                        <AllRecipes
                            recipes={initRecipes}
                            tabs={{
                                category: tabs.title,
                                items: categoryTabs?.items,
                                index: tabs.index,
                            }}
                        />
                        <RelevantSection pageTitle='vegan' />
                    </>
                )}
            </Flex>
        </>
    );
}
