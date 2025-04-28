import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { breadcrumbsMapping, generateUrl } from '~/data/breadcrumbs';

interface TabProps {
    category: string;
    items?: string[];
    index: number;
}

interface Prop {
    tab: TabProps;
}

export default function CustomTab({ tab }: Prop) {
    const { tabs, setTabs } = useContext(BreadcrumbsContext);
    const testTabs = breadcrumbsMapping.find((item) => item.name === tab.category);
    const handleClick = (index: number) => {
        setTabs({ ...tabs, index: index });
    };

    return (
        <Tabs
            as='section'
            defaultIndex={0}
            index={tab.index}
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
                {tab.items &&
                    tab.items.map((item, index) => (
                        <Link to={`${generateUrl(tab.category, index)}`} key={index}>
                            <Tab
                                data-test-id={`tab-${testTabs?.subcategories![index].path}-${index}`}
                                onClick={() => handleClick(index)}
                                fontWeight={500}
                                fontSize={16}
                                lineHeight='150%'
                                color='#134b00'
                                whiteSpace='nowrap'
                                _selected={{ color: '#2db100' }}
                            >
                                {item}
                            </Tab>
                        </Link>
                    ))}
            </TabList>
            <TabIndicator mt='39.5px' height='2px' bg='#2db100' />
        </Tabs>
    );
}
