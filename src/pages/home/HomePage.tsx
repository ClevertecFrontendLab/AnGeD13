import { Flex } from '@chakra-ui/react';

import BestSection from '~/components/bestSection/BestSection';
import Blogs from '~/components/blogs/Blogs';
import NewRecipes from '~/components/newRecipes/NewRecipes';
import PageHeader from '~/components/pageHeader/PageHeader';
import RelevantSection from '~/components/relevantSection/RelevantSection';

export default function HomePage() {
    return (
        <>
            <PageHeader title='Приятного аппетита!' />
            <Flex
                flexDirection='column'
                rowGap={{
                    base: '32px',
                    lg: '40px',
                }}
            >
                <NewRecipes />
                <BestSection />
                <Blogs />
                <RelevantSection pageTitle='home' />
            </Flex>
        </>
    );
}
