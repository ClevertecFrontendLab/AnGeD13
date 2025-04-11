import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Menu, MenuButton } from '@chakra-ui/react';

export default function AllergicMenu() {
    return (
        <Menu>
            <MenuButton
                w='234px'
                h='40px'
                transition='all 0.2s'
                borderRadius='6px'
                border='1px solid rgba(0, 0, 0, 0.08)'
                bg='transparent'
                fontFamily='font'
                fontWeight={400}
                fontSize={16}
                color='rgba(0, 0, 0, 0.64)'
                _hover={{
                    color: '#2d3748',
                    borderColor: '#c4ff61',
                }}
            >
                <Flex
                    w='232px'
                    alignItems='center'
                    justifyContent='space-between'
                    paddingLeft={4}
                    paddingRight={2.5}
                >
                    <span>Выберите из списка... </span>
                    <ChevronDownIcon w='20px' h='20px' />
                </Flex>
            </MenuButton>
        </Menu>
    );
}
