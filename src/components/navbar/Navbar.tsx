import { Flex } from '@chakra-ui/react';

import NavBarFooter from '~/ui/navbarFooter/NavbarFooter';

import MenuComponent from '../menu/Menu';

export default function Navbar() {
    return (
        <Flex
            as='aside'
            position='fixed'
            top='80px'
            display={{
                base: 'none',
                lg: 'flex',
            }}
            flexDirection='column'
            justifyContent='space-between'
            fontFamily='font'
            w='256px'
            h='calc(100vh - 80px)'
            paddingTop='24px'
            boxShadow='0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)'
        >
            <MenuComponent />
            <NavBarFooter />
        </Flex>
    );
}
