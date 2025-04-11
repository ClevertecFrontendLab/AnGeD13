import { Box, Flex } from '@chakra-ui/react';

import { newRecipes } from '~/data/newRecipes';
import H2 from '~/ui/headings/H2';

import NewRecipeCard from '../newRecipeCard/NewRecipeCard';
import Slider from '../slider/Slider';

export default function NewRecipes() {
    return (
        <Box as='section' position='relative'>
            <H2>Новые рецепты</H2>
            <Flex
                h={{
                    base: '220px',
                    lg: '402px',
                    xl: '414px',
                }}
                flexWrap='wrap'
                overflow='hidden'
                columnGap={{
                    base: '12px',
                    xl: '24px',
                }}
                mt={{
                    base: '12px',
                    lg: '24px',
                }}
            >
                {newRecipes.map((item, index) => (
                    <NewRecipeCard key={index} {...item} />
                ))}
            </Flex>
            <Slider />
        </Box>
    );
}
