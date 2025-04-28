import { Box, Flex } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useScreenWidth } from '~/hooks/useScreenWidth';
import AllergicMenu from '~/ui/allergicMenu/AllergicMenu';
import Filter from '~/ui/filter/Filter';
import PageHeading from '~/ui/pageHeading/PageHeading';
import Searcher from '~/ui/searcher/Searcher';
import Switcher from '~/ui/switcher/Switcher';

interface HeaderData {
    title: string;
    veganDescription?: boolean;
}

export default function PageHeader({ title, veganDescription }: HeaderData) {
    const { screenWidth } = useScreenWidth();

    const { setFilterIngredients, isFilterOpen } = useContext(BreadcrumbsContext);
    const [localSwitch, setLocalSwitch] = useState<boolean>(false);
    const [localAllergens, setLocalAllergens] = useState<string[]>([]);

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
                <PageHeading>{title}</PageHeading>
                {veganDescription && (
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
                        Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                        попробовать вегетарианскую диету и готовить вкусные вегетарианские блюда.
                    </Box>
                )}
            </Flex>
            <Flex as='form' flexDirection='column' rowGap={4}>
                <Flex columnGap={3}>
                    <Filter />
                    <Searcher />
                </Flex>

                {screenWidth >= 1440 && (
                    <Flex columnGap={4} zIndex={2}>
                        <Switcher
                            parent='page'
                            isAllergensSwitch={localSwitch}
                            setIsAllergensSwitch={setLocalSwitch}
                            setFilterIngredients={setLocalAllergens}
                        />
                        <AllergicMenu
                            parent='page'
                            setFilterIngredients={setLocalAllergens}
                            filterIngredients={localAllergens}
                            isAllergensSwitch={localSwitch}
                            isFilterOpen={isFilterOpen}
                        />
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
}
