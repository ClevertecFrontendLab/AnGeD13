import { Flex } from '@chakra-ui/react';

import AllRecipes from '~/components/allRecipes/AllRecipes';
import PageHeader from '~/components/pageHeader/PageHeader';
import RelevantSection from '~/components/relevantSection/RelevantSection';
import { recipesVegan } from '~/data/mainRecipesCard';
import { menuList } from '~/data/menu';

export default function VeganPage() {
    const veganTabs = menuList.find((obj) => obj.title === 'Веганская кухня');
    return (
        <>
            <PageHeader title='Веганская кухня' veganDescription={true} />
            <Flex flexDirection='column' rowGap='40px'>
                <AllRecipes recipes={recipesVegan} tabs={veganTabs?.items} />
                <RelevantSection pageTitle='vegan' />
            </Flex>
        </>
    );
}
