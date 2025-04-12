import { Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';

interface Prop {
    tabs: string[];
}

export default function CustomTab({ tabs }: Prop) {
    return (
        <Tabs
            as='section'
            defaultIndex={2}
            display='flex'
            justifyContent={{
                base: 'start',
                md: 'center',
            }}
            fontFamily='font'
            marginBottom='24px'
            overflow='hidden'
        >
            <TabList>
                {tabs.map((item, index) => (
                    <Tab
                        key={index}
                        fontWeight={500}
                        fontSize={16}
                        lineHeight='150%'
                        color='#134b00'
                        whiteSpace='nowrap'
                        _selected={{ color: '#2db100' }}
                    >
                        {item}
                    </Tab>
                ))}
            </TabList>
            <TabIndicator mt='39.5px' height='2px' bg='#2db100' />
        </Tabs>
    );
}
