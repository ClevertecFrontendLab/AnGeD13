import { Card, CardBody, CardFooter, Flex, Heading, Image, Text } from '@chakra-ui/react';

import { newRecipeCard } from '~/data/newRecipes';
import CategoryBadge from '~/ui/badges/CategoryBadge';
import CardNotification from '~/ui/cardNotification/CardNotifiction';

export default function NewRecipeCard({ ...item }: newRecipeCard) {
    return (
        <Card
            as='article'
            w={{
                base: '158px',
                lg: '277px',
                xl: '322px',
            }}
            h={{
                base: '220px',
                lg: '402px',
                xl: '414px',
            }}
            fontFamily='font'
            boxShadow='none'
            border='1px solid rgba(0, 0, 0, 0.08)'
            transition='all 0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <CardBody p={0}>
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    borderTopRadius='8px'
                    h={{
                        base: '128px',
                        lg: '230px',
                    }}
                />
                <Flex
                    flexDirection='column'
                    rowGap='8px'
                    paddingTop={{
                        base: '8px',
                        lg: '12px',
                        xl: '16px',
                    }}
                    paddingInline={{
                        base: '8px',
                        lg: '12px',
                        xl: '24px',
                    }}
                >
                    <Heading
                        as='h3'
                        fontFamily='font'
                        fontWeight={500}
                        fontSize={{
                            base: 16,
                            lg: 18,
                            xl: 20,
                        }}
                        lineHeight={{
                            base: '150%',
                            lg: '156%',
                            xl: '140%',
                        }}
                        color='#000'
                        noOfLines={{
                            base: 2,
                            lg: 1,
                        }}
                    >
                        {item.title}
                    </Heading>
                    <Text
                        fontWeight={400}
                        fontSize={14}
                        lineHeight='143%'
                        color='#000'
                        sx={{
                            display: 'none',
                            '@media screen and (min-width: 1440px)': {
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            },
                        }}
                    >
                        {item.description}
                    </Text>
                </Flex>
            </CardBody>
            <CardFooter
                p={{
                    base: '8px',
                    lg: '12px',
                    xl: '24px',
                }}
                paddingBottom={{
                    base: '4px',
                    lg: '12px',
                    xl: '20px',
                }}
                display='flex'
                justifyContent='space-between'
            >
                <Flex
                    position={{
                        base: 'absolute',
                        lg: 'static',
                    }}
                    top='8px'
                    left='8px'
                >
                    <CategoryBadge
                        svgId={item.svgId}
                        category={item.badgeCategory}
                        badgeIcon={item.badgeIcon}
                        bg='#d7ff94'
                    />
                </Flex>
                <CardNotification bookmark={item.bookmark} emoji={item.emoji} />
            </CardFooter>
        </Card>
    );
}
