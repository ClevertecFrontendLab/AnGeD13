import { Flex, Text } from '@chakra-ui/react';

import { contentFooter } from '~/data/contentFooter';
import H2 from '~/ui/headings/H2';

import RelevantCard from '../relevantCard/RelevantCard';
import RelevantListItem from '../relevantListItem/RelevantListItem';

interface PageData {
    pageTitle: string;
}

export default function RelevantSection({ pageTitle }: PageData) {
    const page = contentFooter[pageTitle];

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
                <H2>{page.title}</H2>
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
                    {page.description}
                </Text>
            </Flex>
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
                    {page.cards.map((card, index) => (
                        <RelevantCard key={index} {...card} />
                    ))}
                </Flex>
                <Flex w='100%' flexDirection='column' rowGap='12px'>
                    {page.list.map((item, index) => (
                        <RelevantListItem key={index} {...item} />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}
