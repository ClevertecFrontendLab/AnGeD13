import { Box, Flex } from '@chakra-ui/react';

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
    return (
        <Flex
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

                <Flex
                    display={{
                        base: 'none',
                        lg: 'flex',
                    }}
                    columnGap={4}
                >
                    <Switcher />
                    <AllergicMenu />
                </Flex>
            </Flex>
        </Flex>
    );
}
