import { SearchIcon } from '@chakra-ui/icons';
import { Avatar, Box, Flex, Grid, IconButton, Text } from '@chakra-ui/react';
import { useContext } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';

import AvaterSrc from '../../assets/images/avatars/avatar.jpg';
import { HomeIcon, WriteRecipeIcon } from '../icon/icons/Icons';

export default function Footer() {
    const { isAuthorized } = useContext(BreadcrumbsContext);

    if (isAuthorized) {
        return (
            <Box as='footer' data-test-id='footer'>
                <Grid
                    as='nav'
                    position='fixed'
                    zIndex={3}
                    bottom='0px'
                    left='0px'
                    display={{ base: 'grid', mdfooter: 'none' }}
                    templateColumns='repeat(4, 1fr)'
                    w='100%'
                    h='84px'
                    bg='#ffffd3'
                    fontFamily='font'
                    fontWeight={400}
                    fontSize={12}
                    lineHeight='133%'
                    color='rgba(0, 0, 0, 0.64)'
                    boxShadow='0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                >
                    <Flex
                        flexDirection='column'
                        alignItems='center'
                        paddingBlock='14px 10px'
                        bg='radial-gradient(62.52% 62.51% at 48.89% 37.5%, #c4ff61 0%, rgba(255, 255, 255, 0) 50%)'
                    >
                        <IconButton
                            aria-label='Home'
                            w='40px'
                            h='40px'
                            bg='#000'
                            isRound={true}
                            icon={<HomeIcon size={16} />}
                            _hover={{
                                bg: 'rgba(30, 30, 30, 0.3)',
                            }}
                            _active={{
                                bg: 'rgba(30, 30, 30, 0.7)',
                            }}
                        />
                        <Text fontWeight={500} color='rgba(0, 0, 0)'>
                            Главная
                        </Text>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center' paddingBlock='10px'>
                        <IconButton
                            w='48px'
                            h='48px'
                            icon={<SearchIcon w='24px' h='24px' />}
                            aria-label='Search database'
                            bg='transparent'
                        />
                        <Text>Поиск</Text>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center' paddingBlock='10px'>
                        <IconButton
                            h='48px'
                            w='48px'
                            bg='transparent'
                            icon={<WriteRecipeIcon size={24} color='rgba(0, 0, 0, 0.92)' />}
                            aria-label='White recipe'
                        />
                        <Text>Записать</Text>
                    </Flex>

                    <Flex flexDirection='column' alignItems='center' paddingBlock='10px'>
                        <Avatar src={AvaterSrc} size='md' />
                        <Text>Мой профиль</Text>
                    </Flex>
                </Grid>
            </Box>
        );
    }
    return null;
}
