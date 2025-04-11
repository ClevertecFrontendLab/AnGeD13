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
import { useContext } from 'react';
import { Link } from 'react-router';

import { menuList } from '~/data/menu';
import MenuIcon from '~/ui/menuIcon/Menuicon';
import { BreadcrumbsContext } from '~/utils/breadCrumbsContext';

import CustomIcon from '../icon/CustomIcon';
import styles from './menu.module.css';

export default function MenuComponent() {
    const { path, setPath } = useContext(BreadcrumbsContext);

    const handleClick = (mainTitle: string, subTitle: string) => {
        if (path.length > 1) {
            setPath([
                { title: 'Главная', link: '/' },
                { title: mainTitle, link: '/vegan' },
                { title: subTitle, link: '/vegan' },
            ]);
        } else {
            setPath([
                ...path,
                { title: mainTitle, link: '/vegan' },
                { title: subTitle, link: '/vegan' },
            ]);
        }
    };

    return (
        <Accordion
            w='256px'
            overflowY='auto'
            maxHeight='896px'
            fontSize={16}
            color='#000'
            p={2.5}
            paddingRight={4}
            borderBottomRadius='12px'
            allowToggle
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
                            <AccordionButton
                                onClick={() => handleClick(item.title, item.items[0])}
                                data-test-id={
                                    item.title === 'Веганская кухня' ? 'vegan-cuisine' : undefined
                                }
                                w={230}
                                h={12}
                                paddingInline={2}
                                transition='all 0.2s'
                                _hover={{
                                    bg: '#ffffd3',
                                }}
                                _expanded={{
                                    bg: '#eaffc7',
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
                                    <MenuIcon isExpanded={isExpanded} size={16} />
                                </Flex>
                            </AccordionButton>
                            <AccordionPanel padding={0}>
                                <List>
                                    {item.items.map((listItem, index) => (
                                        <Link
                                            key={index}
                                            to='/vegan'
                                            className={styles.secondLink}
                                            onClick={() => handleClick(item.title, listItem)}
                                        >
                                            <ListItem
                                                className={styles.secondList}
                                                h={9}
                                                display='flex'
                                                fontWeight={500}
                                                lineHeight='150%'
                                                paddingBlock={1.5}
                                                paddingLeft='40px'
                                                paddingRight={2}
                                                whiteSpace='nowrap'
                                                overflow='hidden'
                                                textOverflow='ellipsis'
                                                transition='all 0.2s'
                                            >
                                                <Flex
                                                    className={styles.secondListSpan}
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
