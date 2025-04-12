import { Flex } from '@chakra-ui/react';

import PageWrapper from '~/pages/pageWrapper';

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

export default function Content() {
    return (
        <Flex
            columnGap={6}
            h={{
                base: 'calc(100vh - 84px)',
                mdfooter: 'calc(100vh - 80px)',
            }}
            justifyContent={{
                base: 'center',
                lg: 'normal',
            }}
        >
            <Navbar />
            <PageWrapper />
            <Sidebar />
        </Flex>
    );
}
