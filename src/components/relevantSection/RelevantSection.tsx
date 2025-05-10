import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useToast } from '~/hooks/useToast';
import { useGetRecipesByCategoryQuery } from '~/query/recipe-api';
import { useAppSelector } from '~/store/hooks';
import { TCategory } from '~/store/types';
import H2 from '~/ui/headings/H2';

import RelevantCard from '../relevantCard/RelevantCard';
import RelevantListItem from '../relevantListItem/RelevantListItem';

export default function RelevantSection() {
    const categories = useAppSelector((state) => state.categories.categories);
    const { category } = useParams();
    const [randomCategory, setRandomCategory] = useState<TCategory | null>(null);
    const { showError } = useToast();
    const [errorShown, setErrorShown] = useState(false);

    console.log('relevant');

    useEffect(() => {
        if (categories) {
            const onlyCategories = categories.filter((cat) => cat.subCategories);
            const randomIndex = Math.floor(Math.random() * onlyCategories.length);
            setRandomCategory(onlyCategories[randomIndex]);
            setErrorShown(false);
        }
    }, [category, categories]);

    const { data: recipes, isError } = useGetRecipesByCategoryQuery(
        {
            categoryId: randomCategory?._id || '',
            limit: 5,
        },
        {
            skip: !randomCategory,
            refetchOnMountOrArgChange: true,
        },
    );

    useEffect(() => {
        if (!errorShown && isError) {
            showError('Ошибка сервера', 'Попробуйте поискать снова попозже');
            setErrorShown(true);
        }
    }, [isError, showError, errorShown, category]);

    return (
        <Flex
            as='section'
            flexDirection='column'
            rowGap={{
                base: '16px',
                lg: '24px',
            }}
            borderTop='1px solid rgba(0, 0, 0, 0.08)'
            paddingTop={{
                base: '8px',
                lg: '24px',
            }}
            paddingBottom={{
                base: '100px',
                lg: '0px',
            }}
            fontFamily='font'
        >
            {randomCategory && (
                <Flex
                    flexDirection={{
                        base: 'column',
                        lg: 'row',
                    }}
                    justifyContent='space-between'
                    columnGap='46px'
                    rowGap='12px'
                    fontWeight={500}
                >
                    <H2>{randomCategory.title}</H2>
                    <Text
                        w={{
                            lg: '668px',
                        }}
                        fontSize={{
                            base: 14,
                            lg: 16,
                        }}
                        lineHeight={{
                            base: '143%',
                            lg: '150%',
                        }}
                        color='rgba(0, 0, 0, 0.64)'
                    >
                        {randomCategory.description}
                    </Text>
                </Flex>
            )}
            <Flex
                flexDirection={{
                    base: 'column',
                    md: 'row',
                }}
                columnGap={{
                    md: '12px',
                    lg: '16px',
                    xl: '24px',
                }}
                rowGap='12px'
            >
                <Flex
                    flexDirection={{
                        base: 'column',
                        md: 'row',
                    }}
                    columnGap={{
                        md: '12px',
                        lg: '16px',
                        xl: '24px',
                    }}
                    rowGap='12px'
                >
                    {recipes?.data &&
                        recipes.data
                            .slice(0, 2)
                            .map((card, index) => <RelevantCard key={index} {...card} />)}
                </Flex>
                <Flex w='100%' flexDirection='column' rowGap='12px'>
                    {recipes?.data &&
                        recipes.data
                            .slice(2, 5)
                            .map((item, index) => <RelevantListItem key={index} {...item} />)}
                </Flex>
            </Flex>
        </Flex>
    );
}
