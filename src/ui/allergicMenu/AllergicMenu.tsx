import { AddIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
    Checkbox,
    CheckboxGroup,
    Flex,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuList,
    Stack,
    Text,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';

import { allergens as defaultAllergens } from '~/data/allergens';

interface Props {
    parent: string;
    isAllergensSwitch: boolean;
    filterIngredients: string[];
    setFilterIngredients: Dispatch<SetStateAction<string[]>>;
    isFilterOpen?: boolean;
}

export default function AllergicMenu({
    parent,
    filterIngredients,
    setFilterIngredients,
    isAllergensSwitch,
    isFilterOpen,
}: Props) {
    const [customAllergen, setCustomAllergen] = useState<string>('');

    const handleAddCustomAllergen = () => {
        setCustomAllergen('');
        setFilterIngredients([...filterIngredients, customAllergen]);
    };

    const handleKeyPress = (key: string) => {
        if (key === 'Enter') {
            handleAddCustomAllergen();
        }
    };

    return (
        <Menu closeOnSelect={false}>
            {(props) => (
                <>
                    <MenuButton
                        data-test-id={`allergens-menu-button${parent === 'filter' ? '-filter' : ''}`}
                        disabled={!isAllergensSwitch}
                        type='button'
                        display='flex'
                        justifyContent='space-between'
                        w='234px'
                        minH='40px'
                        transition='all 0.2s'
                        borderRadius='6px'
                        border='1px solid rgba(0, 0, 0, 0.08)'
                        bg='transparent'
                        fontFamily='font'
                        fontWeight={400}
                        fontSize={16}
                        color='rgba(0, 0, 0, 0.64)'
                        _hover={{
                            color: '#2d3748',
                            borderColor: '#c4ff61',
                        }}
                        _disabled={{
                            cursor: 'not-allowed',
                            borderColor: 'rgba(0, 0, 0, 0.08)',
                            color: 'rgba(0, 0, 0, 0.64)',
                        }}
                    >
                        <Flex
                            w='232px'
                            alignItems='center'
                            justifyContent='space-between'
                            paddingLeft={4}
                            paddingRight={2.5}
                            paddingBlock='10px'
                        >
                            {filterIngredients.length > 0 && (
                                <Flex gap='8px' flexWrap='wrap'>
                                    {filterIngredients.map((item, index) => (
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
                            {filterIngredients.length === 0 && <span>Выберите из списка... </span>}
                            <ChevronDownIcon
                                w='20px'
                                h='20px'
                                transform={props.isOpen ? 'rotate(180deg)' : ''}
                            />
                        </Flex>
                    </MenuButton>
                    <MenuList w='234px' data-test-id='allergens-menu'>
                        <CheckboxGroup
                            value={filterIngredients}
                            onChange={(values: string[]) => {
                                setFilterIngredients(values);
                            }}
                        >
                            <Stack direction='column' spacing='0px'>
                                {defaultAllergens.map((item, index) => (
                                    <Checkbox
                                        data-test-id={`allergen-${index}`}
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
                                <Flex
                                    padding='8px'
                                    paddingLeft='24px'
                                    columnGap='8px'
                                    alignItems='center'
                                >
                                    <Input
                                        data-test-id={`${isFilterOpen ? null : 'add-other-allergen'}`}
                                        value={customAllergen}
                                        onChange={(event) => setCustomAllergen(event.target.value)}
                                        onKeyDown={(event) => handleKeyPress(event.key)}
                                        placeholder='Другой аллерген'
                                        fontFamily='font'
                                        fontWeight={400}
                                        fontSize={14}
                                        lineHeight='143%'
                                        color='#134b00'
                                        h='32px'
                                        _placeholder={{
                                            color: '#134b00',
                                        }}
                                    />
                                    <IconButton
                                        data-test-id={`${isFilterOpen ? null : 'add-allergen-button'}`}
                                        onClick={handleAddCustomAllergen}
                                        isRound={true}
                                        colorScheme='green'
                                        h='12px'
                                        minH='12px'
                                        minW='12px'
                                        aria-label='Add another allergen'
                                        icon={<AddIcon h='6px' w='6px' />}
                                    />
                                </Flex>
                            </Stack>
                        </CheckboxGroup>
                    </MenuList>
                </>
            )}
        </Menu>
    );
}
