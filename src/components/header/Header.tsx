import { Grid } from '@chakra-ui/react';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Burger from '../burger/Burger';
import Logo from '../logo/Logo';
import Notification from '../notification/Notification';
import PersonalCard from '../personalCard/PersonalCard';

export default function Header() {
    return (
        <Grid
            as='header'
            data-test-id='header'
            position='fixed'
            zIndex={10}
            w='100%'
            h={{ base: '64px', mdfooter: '80px' }}
            templateColumns={{
                base: 'auto 187px 48px',
                md: 'auto 203px 48px',
                lg: '265px auto 432px',
            }}
            alignItems='center'
            paddingInline={{
                base: '20px',
                lg: '16px 56px',
            }}
            bg='#ffffd3'
        >
            <Logo />
            <Breadcrumbs />
            <Notification />
            <PersonalCard />
            <Burger />
        </Grid>
    );
}
