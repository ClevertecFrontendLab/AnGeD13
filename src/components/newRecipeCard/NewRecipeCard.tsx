import { Card, CardBody, CardFooter, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

import { SRC_BASE_URL } from '~/constants/paths';
import { useGetCategoriesQuery } from '~/query/category-api';
import { TRecipe } from '~/store/types';
import CategoryBadge from '~/ui/badges/CategoryBadge';
import CardNotification from '~/ui/cardNotification/CardNotifiction';

interface RecipeWithTest extends TRecipe {
    index: number;
}

export default function NewRecipeCard({ ...item }: RecipeWithTest) {
    const { data } = useGetCategoriesQuery();
    const categories = data?.filter((category) => category.subCategories) || [];
    const getCategory = (id: string) =>
        categories.find(
            (catItem) => catItem.subCategories.some((sub) => sub._id === id) || catItem._id === id,
        );

    const badgesInfo = item.categoriesIds.map((item) => getCategory(item));
    const uniqueBadges = [...new Set(badgesInfo)];

    const formRecipeUrl = (categoryId: string) => {
        const cat = categories.find((catItem) =>
            catItem.subCategories.some((sub) => sub._id === categoryId),
        );
        let categoryUrl;
        let subCategoryUrl;
        let subIndex;
        if (cat) {
            categoryUrl = cat?.category;
            subIndex = cat?.subCategories.findIndex((item) => item._id === categoryId);
            subCategoryUrl = cat?.subCategories[subIndex].category;
        }

        return `${categoryUrl}/${subCategoryUrl}`;
    };

    return (
        <Link to={`/${formRecipeUrl(item.categoriesIds[0])}/${item._id}`}>
            <Card
                data-test-id={`carousel-card-${item.index}`}
                as='article'
                w={{
                    base: '158px',
                    lg: '277px',
                    xl: '322px',
                }}
                minW={{
                    base: '158px',
                    lg: '277px',
                    xl: '322px',
                }}
                minH={{
                    base: '220px',
                    lg: '402px',
                    xl: '414px',
                }}
                maxH={{
                    base: '240px',
                    lg: '422px',
                    xl: '434px',
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
                        src={`${SRC_BASE_URL}/${item.image}`}
                        alt={item.title}
                        objectFit='cover'
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
                    </Flex>
                    <CardNotification bookmark={item.bookmarks} likes={item.likes} />
                </CardFooter>
            </Card>
        </Link>
    );
}
