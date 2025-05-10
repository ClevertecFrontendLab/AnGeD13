import { Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text } from '@chakra-ui/react';

import { useGetCategoriesQuery } from '~/query/category-api';
import { TRecipe } from '~/store/types';
import CategoryBadge from '~/ui/badges/CategoryBadge';
import CardNotification from '~/ui/cardNotification/CardNotifiction';

export default function RelevantCard({ ...card }: TRecipe) {
    const { data } = useGetCategoriesQuery();
    const categories = data?.filter((category) => category.subCategories) || [];
    const getCategory = (id: string) =>
        categories.find(
            (catItem) => catItem.subCategories.some((sub) => sub._id === id) || catItem._id === id,
        );

    const badgesInfo = card.categoriesIds.map((item) => getCategory(item));

    console.log('relevant cats', badgesInfo);
    const uniqueBadges = [...new Set(badgesInfo)];
    return (
        <Card
            as='article'
            w={{
                md: '232px',
                lg: '282px',
                xl: '322px',
            }}
            h={{
                base: '168px',
                lg: '180px',
                xl: '192px',
            }}
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            padding={{
                base: '12px',
                lg: '16px',
                xl: '24px',
            }}
            paddingBottom={{
                lg: '16px',
                xl: '20px',
            }}
            boxShadow='none'
            bg='transparent'
            transition='all 0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <CardHeader p={0} marginBottom={2}>
                <Heading
                    as='h3'
                    fontFamily='font'
                    fontWeight={500}
                    fontSize={{
                        base: 16,
                        lg: 20,
                    }}
                    lineHeight={{
                        base: '150%',
                        lg: '140%',
                    }}
                    color='#000'
                    overflow='hidden'
                    textOverflow='ellipsis'
                    whiteSpace='nowrap'
                >
                    {card.title}
                </Heading>
            </CardHeader>
            <CardBody p={0}>
                <Text
                    h='60px'
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
                    {' '}
                    {card.description}
                </Text>
            </CardBody>
            <CardFooter p={0} display='flex' justifyContent='space-between'>
                <Flex flexWrap='wrap' gap='8px' overflow='hidden'>
                    {uniqueBadges.slice(0, 3).map((cat, index) => (
                        <CategoryBadge
                            key={index}
                            category={cat?.title}
                            badgeIcon={cat?.icon}
                            bg='#ffffd3'
                        />
                    ))}
                </Flex>
                <CardNotification bookmark={card.bookmarks} likes={card.likes} />
            </CardFooter>
        </Card>
    );
}
