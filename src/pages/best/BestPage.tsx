import { Flex } from '@chakra-ui/react';

import AllRecipes from '~/components/allRecipes/AllRecipes';
import PageHeader from '~/components/pageHeader/PageHeader';
import RelevantSection from '~/components/relevantSection/RelevantSection';
import { recipesBest } from '~/data/mainRecipesCard';

export default function BestPage() {
    return (
        <>
            <PageHeader title='Самое сочное' />
            <Flex flexDirection='column' rowGap='40px'>
                <AllRecipes recipes={recipesBest} />
                <RelevantSection pageTitle='best' />
            </Flex>
        </>
    );
}
