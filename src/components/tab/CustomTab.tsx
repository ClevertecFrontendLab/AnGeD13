import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useGetCategoriesQuery } from '~/query/category-api';
import { TSubCategory } from '~/store/types';
import { generateUrl } from '~/utils/generateUrl';

interface Prop {
    tab: TSubCategory[];
    category: string;
    subIndex: number;
}

export default function CustomTab({ tab, category, subIndex }: Prop) {
    const { data } = useGetCategoriesQuery();
    const categories = data?.filter((category) => category.subCategories) || [];
    const { tabs, setTabs } = useContext(BreadcrumbsContext);
    const testTabs = categories.find((item) => item.title === category);
    const handleClick = (index: number) => {
        setTabs({ ...tabs, index: index });
    };

    return (
        <Tabs
            as='section'
            defaultIndex={0}
            index={subIndex}
            display='flex'
            justifyContent={{
                base: 'start',
                md: 'center',
            }}
            fontFamily='font'
            marginBottom='24px'
        >
            <TabList
                w='100%'
                flexWrap={{
                    base: 'nowrap',
                    lg: 'wrap',
                }}
                justifyContent={{
                    base: 'start',
                    lg: 'center',
                }}
                overflow={{
                    base: 'hidden',
                    lg: 'visible',
                }}
            >
                {tab &&
                    tab.map((item, index) => (
                        <Link to={`${generateUrl(categories, category, index)}`} key={index}>
                            <Tab
                                data-test-id={`tab-${testTabs?.subCategories![index].category}-${index}`}
                                onClick={() => handleClick(index)}
                                fontWeight={500}
                                fontSize={16}
                                lineHeight='150%'
                                color='#134b00'
                                whiteSpace='nowrap'
                                _selected={{ color: '#2db100' }}
                            >
                                {item.title}
                            </Tab>
                        </Link>
                    ))}
            </TabList>
            <TabIndicator mt='39.5px' height='2px' bg='#2db100' />
        </Tabs>
    );
}
