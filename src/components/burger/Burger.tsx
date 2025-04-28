import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, useOutsideClick } from '@chakra-ui/react';
import { useContext, useRef } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';

import Breadcrumbs from '../breadcrumbs/Breadcrumbs';
import Navbar from '../navbar/Navbar';

export default function Burger() {
    const burgerRef = useRef<HTMLDivElement>(null);
    const { isBurgerOpen, setIsBurgerOpen } = useContext(BreadcrumbsContext);
    const openBurgerMenu = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    useOutsideClick({
        ref: burgerRef as React.RefObject<HTMLElement>,
        handler: () => setIsBurgerOpen(false),
    });

    return (
        <Box ref={burgerRef}>
            <Flex
                as='button'
                aria-label='Toggle burger-menu'
                onClick={openBurgerMenu}
                w={`${isBurgerOpen ? '32px' : '48px'}`}
                h={`${isBurgerOpen ? '32px' : '48px'}`}
                display={{
                    base: 'flex',
                    lg: 'none',
                }}
                alignItems='center'
                justifyContent='center'
                bg='transparent'
            >
                {isBurgerOpen ? (
                    <CloseIcon w='12px' h='12px' data-test-id='close-icon' />
                ) : (
                    <HamburgerIcon w='24px' h='24px' data-test-id='hamburger-icon' />
                )}
            </Flex>
            {isBurgerOpen && (
                <Box
                    position='absolute'
                    top={{
                        base: '64px',
                        mdfooter: '80px',
                    }}
                    right='8px'
                    zIndex={2}
                    bg='#fff'
                    w='344px'
                    h='876px'
                    overflowY='scroll'
                    borderRadius='0 0 12px 12px'
                    data-test-id='nav'
                >
                    <Navbar>
                        <Box marginBlock='16px 12px' marginInline='20px'>
                            <Breadcrumbs />
                        </Box>
                    </Navbar>
                </Box>
            )}
        </Box>
    );
}
