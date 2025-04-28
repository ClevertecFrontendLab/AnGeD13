import { Box, Button, Flex } from '@chakra-ui/react';

import { RecipeCard } from '~/data/mainRecipesCard';

import MainRecipeCard from '../mainRecipeCard/MainRecipeCard';
import CustomTab from '../tab/CustomTab';

interface TabProps {
    category: string;
    items?: string[];
    index: number;
}

interface AllRecipesProps {
    recipes: RecipeCard[];
    tabs?: TabProps;
    filterText?: string;
}

export default function AllRecipes({ recipes, tabs, filterText }: AllRecipesProps) {
    return (
        <Box>
            {tabs && <CustomTab tab={tabs} />}
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
                {recipes.map((item, index) => (
                    <MainRecipeCard key={index} {...item} filterText={filterText} index={index} />
                ))}
            </Flex>
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
        </Box>
    );
}
