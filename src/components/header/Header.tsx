import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useScreenWidth } from '~/hooks/useScreenWidth';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Burger from '../burger/Burger';
import Logo from '../logo/Logo';
import Notification from '../notification/Notification';
import PersonalCard from '../personalCard/PersonalCard';

export default function Header() {
    const { isBurgerOpen, isAuthorized } = useContext(BreadcrumbsContext);
    const { screenWidth } = useScreenWidth();

    return (
        <Flex
            as='header'
            alignContent='center'
            alignItems='center'
            justifyContent='space-between'
            data-test-id='header'
            position='fixed'
            zIndex={3}
            w='100%'
            h={{ base: '64px', mdfooter: '80px' }}
            paddingInline={{
                base: '20px',
                lg: '16px 56px',
            }}
            bg={`${isBurgerOpen ? '#fff' : '#ffffd3'}`}
        >
            <Flex>
                <Logo />
                {screenWidth >= 1440 && <Breadcrumbs />}
            </Flex>
            <Flex justifyContent='end' alignItems='center'>
                {isAuthorized && (
                    <>
                        <Notification />
                        <PersonalCard />
                    </>
                )}
                <Burger />
            </Flex>
        </Flex>
    );
}
