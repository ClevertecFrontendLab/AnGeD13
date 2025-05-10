import { Box, CircularProgress, Flex } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useLazyRecipesSearch } from '~/hooks/useRecipesSearch';
import { useScreenWidth } from '~/hooks/useScreenWidth';
import { useToast } from '~/hooks/useToast';
import AllergicMenu from '~/ui/allergicMenu/AllergicMenu';
import Filter from '~/ui/filter/Filter';
import PageHeading from '~/ui/pageHeading/PageHeading';
import Searcher from '~/ui/searcher/Searcher';
import Switcher from '~/ui/switcher/Switcher';

interface HeaderData {
    title: string;
    categoryDescription?: string;
    isTitleMatch: boolean | null;
}

export default function PageHeader({ title, categoryDescription, isTitleMatch }: HeaderData) {
    const { screenWidth } = useScreenWidth();
    const { data, isFetching, runSearch, isError } = useLazyRecipesSearch();
    const { setFilterIngredients, isFilterOpen } = useContext(BreadcrumbsContext);
    const [localSwitch] = useState<boolean>(false);
    const [localAllergens] = useState<string[]>([]);
    const [isStartSearching, setIsStartSearching] = useState<boolean>(false);
    const { showError } = useToast();

    console.log('data', data);

    useEffect(() => {
        if (isError) {
            showError('Ошибка сервера', 'Попробуйте поискать снова попозже');
        }
    }, [isError, showError]);

    useEffect(() => {
        if (isStartSearching) {
            runSearch();
            if (data) {
                setIsStartSearching(false);
            }
        }
    }, [runSearch, data, isStartSearching, setIsStartSearching]);

    useEffect(() => {
        if (localSwitch) {
            setFilterIngredients(localAllergens);
        } else {
            setFilterIngredients([]);
        }
    }, [localSwitch, localAllergens, setFilterIngredients]);

    return (
        <Flex
            role='group'
            as='section'
            flexDirection='column'
            alignSelf='center'
            alignItems='center'
            rowGap={{
                base: '16px',
                lg: '32px',
            }}
            marginBottom='32px'
            paddingInline={{
                base: '16px',
                md: '20px',
            }}
            paddingBottom='16px'
            paddingTop='32px'
            borderRadius={{
                base: '0 0 8px 8px',
                xl: '24px',
            }}
            _hover={{
                boxShadow:
                    '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            _focusWithin={{
                boxShadow:
                    '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            w={{
                base: '360px',
                md: '480px',
                lg: '758px',
                xl: '898px',
            }}
        >
            <Flex flexDirection='column' rowGap={3} alignItems='center'>
                {(isTitleMatch || data === undefined) && <PageHeading>{title}</PageHeading>}
                {data && data.length === 0 && (
                    <Box
                        w={{
                            base: '100%',
                            lg: '410px',
                        }}
                        fontFamily='font'
                        fontWeight={600}
                        fontSize={16}
                        lineHeight='150%'
                        textAlign='center'
                        color='#000'
                    >
                        По вашему запросу ничего не найдено. Попробуйте другой запрос
                    </Box>
                )}
                {categoryDescription && (
                    <Box
                        w={{
                            base: '100%',
                            lg: '696px',
                        }}
                        fontFamily='font'
                        fontWeight={500}
                        fontSize={{
                            base: 14,
                            lg: 16,
                        }}
                        lineHeight={{
                            base: '143%',
                            lg: '150%',
                        }}
                        textAlign='center'
                        color='rgba(0, 0, 0, 0.48)'
                    >
                        {categoryDescription}
                    </Box>
                )}
            </Flex>
            {isFetching ? (
                <Flex
                    w='80px'
                    h='80px'
                    justifyContent='center'
                    alignItems='center'
                    opacity={0.7}
                    borderRadius='50%'
                    bg='radial-gradient( #C4FF61 0%, transparent 100%)'
                >
                    <Box w='24px' h='24px'>
                        <CircularProgress
                            data-test-id='loader-search-block'
                            isIndeterminate
                            capIsRound={true}
                            value={70}
                            size='100%'
                            color='black'
                            trackColor='transparent'
                            thickness='6px'
                        />
                    </Box>
                </Flex>
            ) : (
                <Flex as='form' flexDirection='column' rowGap={4}>
                    <Flex columnGap={3}>
                        <Filter />
                        <Searcher
                            isTitleMatch={isTitleMatch}
                            setIsStartSearching={setIsStartSearching}
                        />
                    </Flex>

                    {screenWidth >= 1440 && (
                        <Flex columnGap={4} zIndex={2}>
                            <Switcher parent='page' />
                            <AllergicMenu parent='page' isFilterOpen={isFilterOpen} />
                        </Flex>
                    )}
                </Flex>
            )}
        </Flex>
    );
}
