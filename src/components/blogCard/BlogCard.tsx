import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

interface Props {
    name: string;
    nick: string;
    avatarSrc: string;
    text: string;
}

export default function BlogCard({ ...item }: Props) {
    return (
        <Card
            as='article'
            h={{
                base: '152px',
                lg: '160px',
                xl: '184px',
            }}
            w={{
                base: '100%',
                md: '266px',
                big: '33%',
                l: '33%',
                xl: '426px',
            }}
            boxShadow='none'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            padding={{
                base: '16px',
                xl: '24px',
            }}
            paddingBottom='20px'
            transition='all 0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <CardHeader
                p={0}
                paddingBottom={{
                    base: '8px',
                    xl: '16px',
                }}
            >
                <Flex>
                    <Flex
                        gap={{
                            base: '8px',
                            lg: '12px',
                        }}
                        alignItems='center'
                    >
                        <Avatar
                            name={item.name}
                            src={item.avatarSrc}
                            size={{
                                base: 'sm',
                                lg: 'md',
                            }}
                        />
                        <Box>
                            <Heading
                                as='h3'
                                fontFamily='font'
                                fontWeight={500}
                                fontSize={{
                                    base: 16,
                                    lg: 18,
                                }}
                                lineHeight={{
                                    base: '150%',
                                    lg: '156%',
                                }}
                                color='#000'
                                sx={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                }}
                            >
                                {item.name}
                            </Heading>
                            <Text
                                as='h4'
                                fontWeight={400}
                                fontSize={{
                                    base: 12,
                                    xl: 14,
                                }}
                                lineHeight={{
                                    base: '133%',
                                    xl: '143%',
                                }}
                                color='rgba(0, 0, 0, 0.64)'
                            >
                                {item.nick}
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody
                p={0}
                paddingTop={{
                    base: '8px',
                    xl: '12px',
                }}
            >
                <Text
                    fontWeight={400}
                    fontSize={14}
                    lineHeight='143%'
                    color='#000'
                    sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {item.text}
                </Text>
            </CardBody>
        </Card>
    );
}
