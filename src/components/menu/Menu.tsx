import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Link } from 'react-router';

import { menuList } from '~/data/menu';
import MenuIcon from '~/ui/menuIcon/Menuicon';
import { BreadcrumbsContext } from '~/utils/breadCrumbsContext';

import CustomIcon from '../icon/CustomIcon';
import styles from './menu.module.css';

export default function MenuComponent() {
    const { setPath, activePanel, setActivePanel } = useContext(BreadcrumbsContext);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleClick = (mainTitle: string, subTitle: string, index: number) => {
        setCurrentIndex(index);
        setActivePanel(true);
        setPath([
            { title: 'Главная', link: '/' },
            { title: mainTitle, link: '/vegan' },
            { title: subTitle, link: '/vegan' },
        ]);
    };

    return (
        <Accordion
            allowToggle
            w='256px'
            overflowY='auto'
            maxHeight='896px'
            fontSize={16}
            color='#000'
            p={2.5}
            paddingRight={4}
            borderBottomRadius='12px'
            sx={{
                '&::-webkit-scrollbar': {
                    width: '8px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0, 0, 0, 0.16)',
                    borderRadius: '8px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    borderRadius: '4px',
                },
            }}
        >
            {menuList.map((item, index) => (
                <AccordionItem key={index} borderTop='none' borderBottom='none'>
                    {({ isExpanded }) => (
                        <>
                            <Link to='/vegan'>
                                <AccordionButton
                                    onClick={() => handleClick(item.title, item.items[0], -1)}
                                    data-test-id={
                                        item.title === 'Веганская кухня'
                                            ? 'vegan-cuisine'
                                            : undefined
                                    }
                                    w={230}
                                    h={12}
                                    paddingInline={2}
                                    transition='all 0.2s'
                                    _hover={{
                                        bg: '#ffffd3',
                                    }}
                                    _expanded={{
                                        bg: activePanel ? '#eaffc7' : 'transparent',
                                    }}
                                >
                                    <Flex w='100%' columnGap='12px'>
                                        <CustomIcon name={item.icon} size={24} />
                                        <Box
                                            as='span'
                                            flex='1'
                                            textAlign='left'
                                            fontWeight={500}
                                            whiteSpace='nowrap'
                                            overflow='hidden'
                                            textOverflow='ellipsis'
                                        >
                                            {item.title}
                                        </Box>
                                        <MenuIcon
                                            isExpanded={isExpanded && activePanel}
                                            size={16}
                                        />
                                    </Flex>
                                </AccordionButton>
                            </Link>
                            <AccordionPanel padding={0} display={activePanel ? 'block' : 'none'}>
                                <List>
                                    {item.items.map((listItem, index) => (
                                        <Link
                                            key={index}
                                            to='/vegan'
                                            className={styles.secondLink}
                                            onClick={() => handleClick(item.title, listItem, index)}
                                        >
                                            <ListItem
                                                className={styles.secondList}
                                                h={9}
                                                display='flex'
                                                fontWeight={500}
                                                lineHeight='150%'
                                                paddingBlock={1.5}
                                                paddingLeft={`${activePanel && index === 0 && currentIndex === -1 ? '33px' : '40px'}`}
                                                paddingRight={2}
                                                whiteSpace='nowrap'
                                                overflow='hidden'
                                                textOverflow='ellipsis'
                                                transition='all 0.2s'
                                            >
                                                <Flex
                                                    className={`${activePanel && index === 0 && currentIndex === -1 ? styles.defaultSpan : styles.secondListSpan}`}
                                                    w='1px'
                                                    h='24px'
                                                    bg='#c4ff61'
                                                    marginRight='11px'
                                                    transition='all 0.2s'
                                                />
                                                {listItem}
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
