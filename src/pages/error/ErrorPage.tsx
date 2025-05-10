import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

import ErrorSrc from '../../assets/images/error.png';

export default function ErrorPage() {
    return (
        <Flex
            h={{
                base: 'calc(100vh - 64px)',
                mdfooter: 'calc(100vh - 80px)',
            }}
            justifyContent='center'
            alignItems='center'
        >
            <Flex
                flexDirection='column'
                alignItems='center'
                rowGap='32px'
                w={{
                    base: '316px',
                    lg: '396px',
                }}
                padding='32px'
            >
                <Box>
                    <Image
                        w={{
                            base: '108px',
                            lg: '206px',
                        }}
                        h={{
                            base: '108px',
                            lg: '206px',
                        }}
                        src={ErrorSrc}
                    />
                </Box>
                <Flex flexDirection='column' rowGap='16px'>
                    <Heading
                        as='h1'
                        fontFamily='font'
                        fontWeight={700}
                        fontSize={24}
                        lineHeight='133%'
                        textAlign='center'
                        color='#000'
                    >
                        Упс! Такой страницы нет
                    </Heading>
                    <Text
                        fontFamily='font'
                        fontWeight={400}
                        fontSize={16}
                        lineHeight='150%'
                        textAlign='center'
                        color='rgba(0, 0, 0, 0.64)'
                    >
                        Можете поискать другой рецепт{' '}
                        <Box display='inline' textDecoration='underline'>
                            <Link data-test-id='error-page-go-home' to='/'>
                                здесь.
                            </Link>
                        </Box>
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
}
