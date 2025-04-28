import { Flex } from '@chakra-ui/react';

import { useScreenWidth } from '~/hooks/useScreenWidth';
import PageWrapper from '~/pages/pageWrapper';

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

export default function Content() {
    const { screenWidth } = useScreenWidth();
    return (
        <Flex
            columnGap={6}
            h={{
                base: 'calc(100% - 84px)',
                mdfooter: 'calc(100% - 80px)',
            }}
            justifyContent={{
                base: 'center',
                lg: 'normal',
            }}
        >
            {screenWidth >= 1440 && (
                <Flex
                    position='fixed'
                    data-test-id='nav'
                    top='80px'
                    w='256px'
                    h='calc(100vh - 80px)'
                    paddingTop='24px'
                    boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
                >
                    <Navbar />
                </Flex>
            )}
            <PageWrapper />
            <Sidebar />
        </Flex>
    );
}
