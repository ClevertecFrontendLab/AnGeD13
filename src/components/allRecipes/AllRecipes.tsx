import { Box, Button, Flex } from '@chakra-ui/react';

import { TRecipe, TSubCategory } from '~/store/types';

import MainRecipeCard from '../mainRecipeCard/MainRecipeCard';
import CustomTab from '../tab/CustomTab';

interface AllRecipesProps {
    category?: string;
    subIndex?: number;
    recipes: TRecipe[];
    tabs?: TSubCategory[];
    filterText?: string;
    page?: string;
}

export default function AllRecipes({
    recipes,
    tabs,
    category,
    subIndex,
    filterText,
    page,
}: AllRecipesProps) {
    return (
        <Box>
            {tabs && category && subIndex !== undefined && (
                <CustomTab tab={tabs} category={category} subIndex={subIndex} />
            )}
            <Flex
                as='section'
                flexWrap='wrap'
                justifyContent='start'
                rowGap='16px'
                columnGap={{
                    base: '16px',
                    lg: '24px',
                }}
            >
                {recipes.map((item: TRecipe, index: number) => (
                    <MainRecipeCard key={index} {...item} filterText={filterText} index={index} />
                ))}
            </Flex>
            {page !== 'best' && (
                <Flex justifyContent='center' paddingTop='16px'>
                    <Button
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
                </Flex>
            )}
        </Box>
    );
}
