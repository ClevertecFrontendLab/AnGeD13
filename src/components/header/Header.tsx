import { Grid } from '@chakra-ui/react';
import { useContext } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useScreenWidth } from '~/hooks/useScreenWidth';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Burger from '../burger/Burger';
import Logo from '../logo/Logo';
import Notification from '../notification/Notification';
import PersonalCard from '../personalCard/PersonalCard';

export default function Header() {
    const { isBurgerOpen } = useContext(BreadcrumbsContext);
    const { screenWidth } = useScreenWidth();

    return (
        <Grid
            as='header'
            alignContent='center'
            alignItems='center'
            data-test-id='header'
            position='fixed'
            zIndex={3}
            w='100%'
            h={{ base: '64px', mdfooter: '80px' }}
            templateColumns={{
                base: `${isBurgerOpen ? 'auto 0px 32px' : 'auto 187px 48px'}`,
                md: `${isBurgerOpen ? 'auto 0px 32px' : 'auto 203px 48px'}`,
                lg: '265px auto 432px',
            }}
            paddingInline={{
                base: '20px',
                lg: '16px 56px',
            }}
            bg={`${isBurgerOpen ? '#fff' : '#ffffd3'}`}
        >
            <Logo />
            {screenWidth >= 1440 && <Breadcrumbs />}
            <Notification />
            <PersonalCard />
            <Burger />
        </Grid>
    );
}
