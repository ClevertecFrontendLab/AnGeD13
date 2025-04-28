import { Box, Card, CardBody, CardFooter, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router';

import { allRecipes } from '~/data/allRecipes';
import { RecipeCard } from '~/data/mainRecipesCard';
import CategoryBadge from '~/ui/badges/CategoryBadge';
import RecommendationBadge from '~/ui/badges/RecommendationBadge';
import CookButton from '~/ui/cookButton/CookButton';
import SaveButton from '~/ui/saveButton/SaveButton';

import CardNotification from '../../ui/cardNotification/CardNotifiction';

interface RecipeCardWithFilter extends RecipeCard {
    filterText?: string;
    index: number;
}

export default function MainRecipeCard({ ...item }: RecipeCardWithFilter) {
    const highlightedTitle = item.title.replace(
        new RegExp(`(${item.filterText})`, 'gi'),
        `<span style="color: #2db100;">$1</span>`,
    );

    const getRecipeURL = () => {
        const getRecipe = allRecipes.find((recipe) => recipe.title === item.title);
        const category = getRecipe?.category[0];
        const subcategory = getRecipe?.subcategory[0];
        const id = getRecipe?.id;
        return `/${category}/${subcategory}/${id}`;
    };

    return (
        <Card
            data-test-id={`food-card-${item.index}`}
            as='article'
            h={{
                base: '128px',
                big: '15vw',
                lg: '244px',
            }}
            w={{
                sm: '328px',
                lit: 'calc(80%)',
                md: '356px',
                big: 'calc(50% - 8px)',
                lg: '880px',
                l: '80%',
                xl: '668px',
            }}
            flexDirection='row'
            overflow='hidden'
            boxShadow='none'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            fontFamily='font'
            color='#000'
            bg='transparent'
            transition='all 0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            {item.personNameRecommendation && item.personAvatarRecommendation && (
                <RecommendationBadge
                    name={item.personNameRecommendation}
                    svgSrc={item.personAvatarRecommendation}
                />
            )}
            <Image
                h='100%'
                w={{
                    base: '158px',
                    big: 'calc(40%)',
                    lg: '346px',
                }}
                objectFit='cover'
                src={item.imageUrl}
                alt={item.title}
            />
            <Flex
                flexDirection='column'
                rowGap={{
                    base: '0px',
                    lg: '24px',
                }}
                w={{
                    sm: '170px',
                    lit: 'calc(100%)',
                    md: '198px',
                    big: 'calc(100%)',
                    lg: '534px',
                    l: 'calc(100% - 346px)',
                    xl: '322px',
                }}
                paddingInline={{
                    base: '8px',
                    lg: '24px',
                }}
                paddingBlock={{
                    base: '8px 4px',
                    lg: '20px',
                }}
            >
                <CardBody
                    display='flex'
                    flexDirection='column'
                    rowGap={{
                        base: '0px',
                        lg: '24px',
                    }}
                    p={0}
                >
                    <Flex
                        position={{
                            base: 'absolute',
                            lg: 'static',
                        }}
                        top='8px'
                        left='8px'
                        w={{
                            big: '95%',
                        }}
                        alignItems='start'
                        justifyContent='space-between'
                        columnGap={{
                            base: '30px',
                            lg: '0px',
                        }}
                    >
                        <Flex columnGap='16px' rowGap='8px' flexWrap='wrap'>
                            {item.badgeCategory.slice(0, 3).map((cat, index) => (
                                <CategoryBadge
                                    key={index}
                                    category={cat}
                                    badgeIcon={item.badgeIcon[index]}
                                    bg='#ffffd3'
                                />
                            ))}
                        </Flex>
                        <CardNotification bookmark={item.bookmark} emoji={item.emoji} />
                    </Flex>
                    <Box>
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
                            overflow='hidden'
                            noOfLines={{
                                base: 2,
                                big: 1,
                            }}
                            marginBlock={{
                                base: '24px 0px',
                                lg: '0px 8px',
                            }}
                        >
                            {item.filterText && (
                                <span dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
                            )}
                            {!item.filterText && item.title}
                        </Heading>
                        <Text
                            fontWeight={400}
                            fontSize={14}
                            lineHeight='143%'
                            sx={{
                                display: 'none',
                                '@media screen and (min-width: 1024px)': {
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                },
                            }}
                        >
                            {item.description}
                        </Text>
                    </Box>
                </CardBody>

                <CardFooter
                    display='flex'
                    justifyContent='end'
                    columnGap={{
                        base: '12px',
                        lg: '8px',
                    }}
                    p={0}
                >
                    <SaveButton />
                    <Link to={getRecipeURL()}>
                        <CookButton index={item.index} />
                    </Link>
                </CardFooter>
            </Flex>
        </Card>
    );
}
