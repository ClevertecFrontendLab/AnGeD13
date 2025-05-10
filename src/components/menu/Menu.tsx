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

import { SRC_BASE_URL } from '~/constants/paths';
import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useGetCategoriesQuery } from '~/query/category-api';
import MenuIcon from '~/ui/menuIcon/Menuicon';
import { generateUrl } from '~/utils/generateUrl';

import styles from './menu.module.css';

export default function MenuComponent() {
    const { data } = useGetCategoriesQuery();
    const categories = data?.filter((category) => category.subCategories) || [];
    const { activePanel, setActivePanel } = useContext(BreadcrumbsContext);
    const { tabs, setTabs } = useContext(BreadcrumbsContext);

    const openAccordionIndex = categories.findIndex((item) => item.title === tabs.title);

    const handleClick = (mainTitle: string, index: number) => {
        setTabs({ ...tabs, title: mainTitle, index: index });
        setActivePanel(true);
    };

    const getTestSubcategory = (category: string, index: number) => {
        const cat = categories.find((item) => item.title === category);
        return cat?.subCategories![index].category;
    };

    return (
        <Accordion
            index={openAccordionIndex !== undefined ? openAccordionIndex : 0}
            allowToggle
            w={{
                base: '100%',
                lg: '256px',
            }}
            overflowY='auto'
            maxHeight='calc(100% - 144px)'
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
            {categories.map((item, index) => (
                <AccordionItem key={index} borderTop='none' borderBottom='none'>
                    {({ isExpanded }) => (
                        <>
                            <Link to={`${generateUrl(categories, item.title, 0)}`}>
                                <AccordionButton
                                    onClick={() => handleClick(item.title, 0)}
                                    data-test-id={
                                        item.title === 'Веганская кухня'
                                            ? 'vegan-cuisine'
                                            : `${item.category}`
                                    }
                                    w='100%'
                                    h='48px'
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
                                        <Box w='24px' h='24px'>
                                            {item.icon && (
                                                <img src={`${SRC_BASE_URL}${item.icon}`} />
                                            )}
                                        </Box>
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
                                    {item.subCategories &&
                                        item.subCategories.map((listItem, index) => (
                                            <Link
                                                key={index}
                                                to={`${generateUrl(categories, item.title, index)}`}
                                                className={styles.secondLink}
                                                onClick={() => handleClick(item.title, index)}
                                            >
                                                <ListItem
                                                    data-test-id={
                                                        activePanel && index === tabs.index
                                                            ? `${getTestSubcategory(item.title, index)}-active`
                                                            : null
                                                    }
                                                    className={styles.secondList}
                                                    h={9}
                                                    display='flex'
                                                    fontWeight={500}
                                                    lineHeight='150%'
                                                    paddingBlock={1.5}
                                                    paddingLeft={`${activePanel && index === tabs.index ? '33px' : '40px'}`}
                                                    paddingRight={2}
                                                    whiteSpace='nowrap'
                                                    overflow='hidden'
                                                    textOverflow='ellipsis'
                                                    transition='all 0.2s'
                                                >
                                                    <Flex
                                                        className={`${activePanel && index === tabs.index ? styles.defaultSpan : styles.secondListSpan}`}
                                                        w='1px'
                                                        h='24px'
                                                        bg='#c4ff61'
                                                        marginRight='11px'
                                                        transition='all 0.2s'
                                                    />
                                                    {listItem.title}
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
