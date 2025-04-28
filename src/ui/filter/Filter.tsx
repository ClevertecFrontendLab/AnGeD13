import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    Stack,
    Text,
    useBreakpointValue,
    useOutsideClick,
} from '@chakra-ui/react';
import { useContext, useEffect, useRef, useState } from 'react';

import { FilterIcon } from '~/components/icon/icons/Icons';
import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { authors } from '~/data/authors';
import { meatTypes } from '~/data/meatTypes';
import { menuList } from '~/data/menu';
import { sidedishTypes } from '~/data/sidedishTypes';

import AllergicMenu from '../allergicMenu/AllergicMenu';
import Switcher from '../switcher/Switcher';
import Tag from '../tag/Tag';

export default function Filter() {
    const iconSize = useBreakpointValue({ base: 14, lg: 24 }, { ssr: false });
    const filterRef = useRef<HTMLDivElement>(null);
    const {
        isFilterOpen,
        setIsFilterOpen,
        setFilterIngredients,
        setFilterGlobalMeatType,
        setFilterGlobalSideType,
        setFilterGlobalAuthor,
        setFilterGlobalCategories,
    } = useContext(BreadcrumbsContext);
    const [isMeatTypes, setIsMeatTypes] = useState<string[]>([]);
    const [isSideTypes, setIsSideTypes] = useState<string[]>([]);
    const [filterCategories, setFilterCategories] = useState<string[]>([]);
    const [filterAuthors, setFilterAuthors] = useState<string[]>([]);
    const [allSelectedValues, setAllSelectedValues] = useState<string[]>([]);

    const [localSwitch, setLocalSwitch] = useState<boolean>(false);
    const [localAllergens, setLocalAllergens] = useState<string[]>([]);

    useEffect(() => {
        setAllSelectedValues([
            ...isMeatTypes,
            ...isSideTypes,
            ...filterCategories,
            ...filterAuthors,
            ...localAllergens,
        ]);
    }, [isMeatTypes, isSideTypes, filterCategories, filterAuthors, localAllergens]);

    const isReadyToFilter = () => {
        const typeMeatSide = isMeatTypes.length > 0 || isSideTypes.length > 0;
        const filters = filterCategories.length > 0 || filterAuthors.length > 0;
        return typeMeatSide || filters || localAllergens.length > 0;
    };

    const openFilterMenu = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const findRecipes = () => {
        saveParams();
        closeFilterMenu();
    };

    const saveParams = () => {
        setFilterGlobalMeatType(isMeatTypes);
        setFilterGlobalSideType(isSideTypes);
        setFilterGlobalAuthor(filterAuthors);
        setFilterGlobalCategories(filterCategories);
        setFilterIngredients(localAllergens);
    };

    const closeFilterMenu = () => {
        setIsFilterOpen(false);
        cleanFilters();
    };

    const cleanFilters = () => {
        setLocalSwitch(false);
        setIsMeatTypes([]);
        setIsSideTypes([]);
        setFilterCategories([]);
        setFilterAuthors([]);
        setLocalAllergens([]);
    };

    useOutsideClick({
        ref: filterRef as React.RefObject<HTMLElement>,
        handler: () => setIsFilterOpen(false),
    });

    return (
        <Box ref={filterRef}>
            <IconButton
                data-test-id='filter-button'
                onClick={openFilterMenu}
                width={{
                    base: '32px',
                    lg: '48px',
                }}
                height={{
                    base: '32px',
                    lg: '48px',
                }}
                minWidth='32px'
                border='1px solid rgba(0, 0, 0, 0.48)'
                bg='transparent'
                aria-label='filter'
                icon={<FilterIcon size={iconSize} />}
                transition='all 0.2s'
                _hover={{
                    bg: '#ffffd3',
                }}
                _active={{
                    bg: '#eaffc7',
                }}
            />
            {isFilterOpen && (
                <Flex
                    data-test-id='filter-drawer'
                    position='absolute'
                    top='0px'
                    right='0px'
                    zIndex={4}
                    display={isFilterOpen ? 'block' : 'none'}
                    w={{
                        base: '344px',
                        lg: '463px',
                    }}
                    bg='#fff'
                    padding={{
                        base: '16px',
                        lg: '32px',
                    }}
                    boxShadow='0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                    overflowY='scroll'
                    h='calc(100vh)'
                >
                    <Flex alignItems='center' justifyContent='space-between' paddingBottom='16px'>
                        <Heading
                            as='h3'
                            fontFamily='font'
                            fontWeight={700}
                            fontSize={24}
                            lineHeight='133%'
                            color='#000'
                        >
                            Фильтр
                        </Heading>
                        <IconButton
                            data-test-id='close-filter-drawer'
                            aria-label='Close filter menu'
                            onClick={closeFilterMenu}
                            isRound={true}
                            bg='black'
                            minWidth='24px'
                            maxWidth='24px'
                            minHeight='24px'
                            maxHeight='24px'
                            icon={<CloseIcon color='white' height='12px' width='12px' />}
                        />
                    </Flex>
                    <Flex
                        flexDirection='column'
                        h='calc(100%)'
                        justifyContent='space-between'
                        rowGap={{
                            base: '16px',
                            lg: '24px',
                        }}
                    >
                        <Flex
                            flexDir='column'
                            justifyContent='space-between'
                            rowGap={{
                                base: '16px',
                                lg: '24px',
                            }}
                        >
                            <Menu gutter={0}>
                                {(props) => (
                                    <>
                                        <MenuButton
                                            data-test-id='filter-menu-button-категория'
                                            as={Button}
                                            rightIcon={
                                                <ChevronDownIcon
                                                    transform={props.isOpen ? 'rotate(180deg)' : ''}
                                                />
                                            }
                                            display='flex'
                                            justifyContent='space-between'
                                            textAlign='left'
                                            fontFamily='font'
                                            fontWeight={400}
                                            fontSize={16}
                                            lineHeight='150%'
                                            color='rgba(0, 0, 0, 0.64)'
                                            bg='#fff'
                                            border='1px solid rgba(0, 0, 0, 0.08)'
                                            borderRadius='6px'
                                            minH='40px'
                                            h='100%'
                                            w='100%'
                                            paddingBlock='8px'
                                            paddingInline='16px 12px'
                                            _hover={{
                                                borderColor: '#c4ff61',
                                                color: '#2d3748',
                                            }}
                                            _active={{
                                                borderColor: '#c4ff61',
                                                color: '#2d3748',
                                            }}
                                        >
                                            {filterCategories.length > 0 && (
                                                <Flex gap='8px' flexWrap='wrap'>
                                                    {filterCategories.map((item, index) => (
                                                        <Flex
                                                            key={index}
                                                            h='20px'
                                                            flexWrap='wrap'
                                                            alignItems='center'
                                                            border='1px solid #b1ff2e'
                                                            borderRadius='6px'
                                                            padding='2px 8px'
                                                            fontFamily='font'
                                                            fontWeight={500}
                                                            fontSize={12}
                                                            lineHeight='133%'
                                                            color='#2db100'
                                                        >
                                                            {item}
                                                        </Flex>
                                                    ))}
                                                </Flex>
                                            )}
                                            {filterCategories.length === 0 && (
                                                <span>Категория</span>
                                            )}
                                        </MenuButton>
                                        <MenuList
                                            minWidth={{
                                                base: '308px',
                                                lg: '399px',
                                            }}
                                            maxWidth={{
                                                base: '308px',
                                                lg: '399px',
                                            }}
                                            border='none'
                                            borderRadius='4px'
                                            paddingBlock='4px'
                                            boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                                        >
                                            <CheckboxGroup
                                                value={filterCategories}
                                                onChange={(values: string[]) =>
                                                    setFilterCategories(values)
                                                }
                                            >
                                                <Stack direction='column' spacing='0px'>
                                                    {menuList.map((item, index) => (
                                                        <Checkbox
                                                            data-test-id={
                                                                item.title === 'Веганская кухня'
                                                                    ? 'checkbox-веганская кухня'
                                                                    : null
                                                            }
                                                            className='customCheckbox'
                                                            key={index}
                                                            value={item.title}
                                                            colorScheme='lime'
                                                            iconColor='#000'
                                                        >
                                                            <Text
                                                                fontFamily='font'
                                                                fontWeight={400}
                                                                fontSize={14}
                                                                lineHeight='143%'
                                                            >
                                                                {item.title}
                                                            </Text>
                                                        </Checkbox>
                                                    ))}
                                                </Stack>
                                            </CheckboxGroup>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>

                            <Menu gutter={0}>
                                {(props) => (
                                    <>
                                        <MenuButton
                                            as={Button}
                                            rightIcon={
                                                <ChevronDownIcon
                                                    transform={props.isOpen ? 'rotate(180deg)' : ''}
                                                />
                                            }
                                            display='flex'
                                            justifyContent='space-between'
                                            textAlign='left'
                                            fontFamily='font'
                                            fontWeight={400}
                                            fontSize={16}
                                            lineHeight='150%'
                                            color='rgba(0, 0, 0, 0.64)'
                                            bg='#fff'
                                            border='1px solid rgba(0, 0, 0, 0.08)'
                                            borderRadius='6px'
                                            minH='40px'
                                            h='100%'
                                            w='100%'
                                            paddingBlock='8px'
                                            paddingInline='16px 12px'
                                            _hover={{
                                                borderColor: '#c4ff61',
                                                color: '#2d3748',
                                            }}
                                            _active={{
                                                borderColor: '#c4ff61',
                                                color: '#2d3748',
                                            }}
                                        >
                                            {filterAuthors.length > 0 && (
                                                <Flex gap='8px' flexWrap='wrap'>
                                                    {filterAuthors.map((item, index) => (
                                                        <Flex
                                                            key={index}
                                                            h='20px'
                                                            flexWrap='wrap'
                                                            alignItems='center'
                                                            border='1px solid #b1ff2e'
                                                            borderRadius='6px'
                                                            padding='2px 8px'
                                                            fontFamily='font'
                                                            fontWeight={500}
                                                            fontSize={12}
                                                            lineHeight='133%'
                                                            color='#2db100'
                                                        >
                                                            {item}
                                                        </Flex>
                                                    ))}
                                                </Flex>
                                            )}
                                            {filterAuthors.length === 0 && (
                                                <span>Поиск по автору</span>
                                            )}
                                        </MenuButton>
                                        <MenuList
                                            minWidth={{
                                                base: '308px',
                                                lg: '399px',
                                            }}
                                            maxWidth={{
                                                base: '308px',
                                                lg: '399px',
                                            }}
                                            border='none'
                                            borderRadius='4px'
                                            paddingBlock='4px'
                                            boxShadow='0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                                        >
                                            <CheckboxGroup
                                                value={filterAuthors}
                                                onChange={(values: string[]) =>
                                                    setFilterAuthors(values)
                                                }
                                            >
                                                <Stack direction='column' spacing='0px'>
                                                    {authors.map((item, index) => (
                                                        <Checkbox
                                                            className='customCheckbox'
                                                            key={index}
                                                            value={item.title}
                                                            colorScheme='lime'
                                                            iconColor='#000'
                                                        >
                                                            <Text
                                                                fontFamily='font'
                                                                fontWeight={400}
                                                                fontSize={14}
                                                                lineHeight='143%'
                                                            >
                                                                {item.title}
                                                            </Text>
                                                        </Checkbox>
                                                    ))}
                                                </Stack>
                                            </CheckboxGroup>
                                        </MenuList>
                                    </>
                                )}
                            </Menu>

                            <Box>
                                <Heading
                                    as='h4'
                                    fontFamily='font'
                                    fontWeight={500}
                                    fontSize={16}
                                    lineHeight='150%'
                                    color='#000'
                                    marginBottom='12px'
                                >
                                    Тип мяса:
                                </Heading>
                                <CheckboxGroup
                                    value={isMeatTypes}
                                    onChange={(values: string[]) => setIsMeatTypes(values)}
                                >
                                    <Stack direction='column' spacing='8px'>
                                        {meatTypes.map((item, index) => (
                                            <Checkbox
                                                key={index}
                                                value={item.title}
                                                colorScheme='lime'
                                                iconColor='#000'
                                            >
                                                <Text
                                                    fontFamily='font'
                                                    fontWeight={400}
                                                    fontSize={14}
                                                    lineHeight='143%'
                                                >
                                                    {item.title}
                                                </Text>
                                            </Checkbox>
                                        ))}
                                    </Stack>
                                </CheckboxGroup>
                            </Box>

                            <Box>
                                <Heading
                                    as='h4'
                                    fontFamily='font'
                                    fontWeight={500}
                                    fontSize={16}
                                    lineHeight='150%'
                                    color='#000'
                                    marginBottom='12px'
                                >
                                    Тип гарнира:
                                </Heading>
                                <CheckboxGroup
                                    value={isSideTypes}
                                    onChange={(values: string[]) => setIsSideTypes(values)}
                                >
                                    <Stack direction='column' spacing='8px'>
                                        {sidedishTypes.map((item, index) => (
                                            <Checkbox
                                                data-test-id={
                                                    item.title === 'Картошка'
                                                        ? 'checkbox-картошка'
                                                        : null
                                                }
                                                key={index}
                                                value={item.title}
                                                colorScheme='lime'
                                                iconColor='#000'
                                            >
                                                <Text
                                                    fontFamily='font'
                                                    fontWeight={400}
                                                    fontSize={14}
                                                    lineHeight='143%'
                                                >
                                                    {item.title}
                                                </Text>
                                            </Checkbox>
                                        ))}
                                    </Stack>
                                </CheckboxGroup>
                            </Box>

                            <Flex flexDirection='column' alignItems='' rowGap='14px'>
                                <Switcher
                                    parent='filter'
                                    isAllergensSwitch={localSwitch}
                                    setIsAllergensSwitch={setLocalSwitch}
                                    setFilterIngredients={setLocalAllergens}
                                />
                                <AllergicMenu
                                    parent='filter'
                                    setFilterIngredients={setLocalAllergens}
                                    filterIngredients={localAllergens}
                                    isAllergensSwitch={localSwitch}
                                />
                            </Flex>
                        </Flex>

                        <Flex rowGap='32px' flexDirection='column' justifyContent='end'>
                            <Flex gap='16px' flexWrap='wrap'>
                                {allSelectedValues.map((item, index) => (
                                    <Tag key={index}>{item}</Tag>
                                ))}
                            </Flex>
                            <Flex
                                justifyContent='end'
                                columnGap='8px'
                                marginBottom={{
                                    base: '16px',
                                    lg: '32px',
                                }}
                            >
                                <Button
                                    data-test-id='clear-filter-button'
                                    onClick={cleanFilters}
                                    h={{
                                        base: '32px',
                                        lg: '48px',
                                    }}
                                    padding='6px 12px'
                                    border='1px solid rgba(0, 0, 0, 0.48)'
                                    borderRadius='6px'
                                    bg='rgba(255, 255, 255, 0.06)'
                                >
                                    <Text
                                        fontFamily='font'
                                        fontWeight={600}
                                        fontSize={{
                                            base: '14px',
                                            lg: '18px',
                                        }}
                                        lineHeight={{
                                            base: '143%',
                                            lg: '156%',
                                        }}
                                        color='rgba(0, 0, 0, 0.8)'
                                    >
                                        Очистить фильтр
                                    </Text>
                                </Button>
                                <Button
                                    data-test-id='find-recipe-button'
                                    type='button'
                                    isDisabled={!isReadyToFilter()}
                                    onClick={findRecipes}
                                    h={{
                                        base: '32px',
                                        lg: '48px',
                                    }}
                                    padding='6px 12px'
                                    border='1px solid rgba(0, 0, 0, 0.08)'
                                    borderRadius='6px'
                                    bg='rgba(0, 0, 0, 0.92)'
                                    color='#fff'
                                    _disabled={{
                                        borderColor: 'rgba(0, 0, 0, 0.08)',
                                        bg: 'rgba(0, 0, 0, 0.24)',
                                        color: 'rgba(255, 255, 255, 0.64)',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    <Text
                                        fontFamily='font'
                                        fontWeight={600}
                                        fontSize={{
                                            base: '14px',
                                            lg: '18px',
                                        }}
                                        lineHeight={{
                                            base: '143%',
                                            lg: '156%',
                                        }}
                                    >
                                        Найти рецепт
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            )}
        </Box>
    );
}
