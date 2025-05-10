import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

import AuthorCard from '~/components/authorCard/AuthorCard';
import DetailRecipeCard from '~/components/detailRecipeCard/DetailRecipeCard';
import NewRecipes from '~/components/newRecipes/NewRecipes';
import RecipeStepCard from '~/components/recipeStep/RecipeStepCard';
import { useToast } from '~/hooks/useToast';
import { useGetRecipeByIdQuery } from '~/query/recipe-api';
import { useAppDispatch } from '~/store/hooks';
import { setRecipe } from '~/store/recipe-slice';
import NutritionSection from '~/ui/nutrition/NutritionSection';
import IngredientsTable from '~/ui/table/IngredientsTable';

export default function RecipePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: recipe, isError } = useGetRecipeByIdQuery(id || '', { skip: !id });
    const dispatch = useAppDispatch();
    const cashed = localStorage.getItem('recipe');
    const { showError } = useToast();

    useEffect(() => {
        if (recipe) {
            dispatch(setRecipe(recipe));
        }
    });

    useEffect(() => {
        if (!recipe && cashed) {
            dispatch(setRecipe(cashed));
        }
    });

    useEffect(() => {
        if (isError) {
            showError('Ошибка сервера', 'Попробуйте поискать снова попозже');
            navigate(-1);
        }
    }, [navigate, isError, showError]);

    if (recipe) {
        return (
            <Flex
                flexDirection='column'
                rowGap={{
                    base: '24px',
                    lg: '40px',
                }}
                alignItems='center'
            >
                <DetailRecipeCard {...recipe} />

                <Flex
                    flexDirection='column'
                    rowGap={{
                        base: '24px',
                        lg: '40px',
                    }}
                    w={{
                        base: '100%',
                        lg: '578px',
                        xl: '668px',
                    }}
                >
                    <NutritionSection {...recipe.nutritionValue} />
                    <IngredientsTable ingredients={recipe.ingredients} portions={recipe.portions} />
                    <Flex flexDirection='column' rowGap='20px'>
                        <Heading
                            as='h3'
                            fontFamily='font'
                            fontWeight={500}
                            fontSize={{
                                base: 24,
                                lg: 48,
                            }}
                            lineHeight={{
                                base: '133%',
                                lg: '100%',
                            }}
                            color='#000'
                        >
                            Шаги приготовления
                        </Heading>
                        {recipe.steps.map((step, index) => (
                            <RecipeStepCard
                                key={index}
                                step={step}
                                index={index}
                                len={recipe.steps.length - 1}
                            />
                        ))}
                    </Flex>

                    <AuthorCard />
                </Flex>
                <Box
                    w='100%'
                    paddingTop={{
                        base: '0px',
                        lg: '16px',
                    }}
                >
                    <NewRecipes />
                </Box>
            </Flex>
        );
    }
}
