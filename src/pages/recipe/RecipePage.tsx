import { Box, Flex, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router';

import AuthorCard from '~/components/authorCard/AuthorCard';
import DetailRecipeCard from '~/components/detailRecipeCard/DetailRecipeCard';
import NewRecipes from '~/components/newRecipes/NewRecipes';
import RecipeStepCard from '~/components/recipeStep/RecipeStepCard';
import { allRecipes } from '~/data/allRecipes';
import NutritionSection from '~/ui/nutrition/NutritionSection';
import IngredientsTable from '~/ui/table/IngredientsTable';

export default function RecipePage() {
    const { id } = useParams();
    const item = allRecipes.find((item) => item.id === id);
    return (
        <Flex
            flexDirection='column'
            rowGap={{
                base: '24px',
                lg: '40px',
            }}
            alignItems='center'
        >
            <DetailRecipeCard {...item!} />

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
                <NutritionSection nutrition={item!.nutritionValue} />
                <IngredientsTable ingredients={item!.ingredients} portions={item?.portions} />
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
                    {item!.steps.map((step, index) => (
                        <RecipeStepCard
                            key={index}
                            step={step}
                            index={index}
                            len={item!.steps.length - 1}
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
