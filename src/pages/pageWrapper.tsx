import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import { NOT_FOUND, THE_JUICIEST } from '~/constants/paths';

import BestPage from './best/BestPage';
import CategoryPage from './category/CategoryPage';
import ErrorPage from './error/ErrorPage';
import HomePage from './home/HomePage';
import RecipePage from './recipe/RecipePage';

export default function PageWrapper() {
    return (
        <Flex
            as='main'
            flexDirection='column'
            w={{
                base: '100vw',
                md: '768px',
                big: 'calc(80vw)',
                lg: '880px',
                l: 'calc(100vw - 260px - 220px)',
                xl: '1360px',
            }}
            paddingInline={{
                base: '16px',
                md: '20px',
                lg: '0px',
            }}
            marginLeft={{
                base: '0px',
                lg: '280px',
            }}
            marginTop={{
                base: '64px',
                lg: '80px',
            }}
        >
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path={`${NOT_FOUND}`} element={<ErrorPage />} />
                <Route path={`${THE_JUICIEST}`} element={<BestPage />} />
                <Route path='/:category' element={<CategoryPage />}>
                    <Route path=':subcategory' element={<CategoryPage />} />
                </Route>
                <Route path='/:category/:subcategory/:id' element={<RecipePage />} />
            </Routes>
        </Flex>
    );
}
