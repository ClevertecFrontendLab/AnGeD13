import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

import NavBarFooter from '~/ui/navbarFooter/NavbarFooter';

import MenuComponent from '../menu/Menu';

interface Props {
    children?: ReactNode;
}

export default function Navbar({ children }: Props) {
    return (
        <Flex
            as='aside'
            flexDirection='column'
            justifyContent='space-between'
            fontFamily='font'
            h='100%'
        >
            {children}
            <MenuComponent />
            <NavBarFooter />
        </Flex>
    );
}
