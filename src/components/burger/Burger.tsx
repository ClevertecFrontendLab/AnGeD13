import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

export default function Burger() {
    return (
        <Flex
            w='48px'
            h='48px'
            display={{
                base: 'flex',
                lg: 'none',
            }}
            alignItems='center'
            justifyContent='center'
        >
            <HamburgerIcon w='24px' h='24px' />
        </Flex>
    );
}
