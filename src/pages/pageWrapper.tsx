import { Flex } from '@chakra-ui/react';
import { Route, Routes } from 'react-router';

import BestPage from './best/BestPage';
import HomePage from './home/HomePage';
import VeganPage from './vegan/VeganPage';

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
                <Route index element={<HomePage />} />
                <Route path='/vegan' element={<VeganPage />} />
                <Route path='/best' element={<BestPage />} />
            </Routes>
        </Flex>
    );
}
