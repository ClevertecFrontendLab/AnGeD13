import { Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useState } from 'react';

import TableNumberInput from './numberInput';

interface IngredientProps {
    title: string;
    count: string;
    measureUnit: string;
}

interface Ingredients {
    ingredients: IngredientProps[];
    portions?: number;
}

export default function IngredientsTable({ ingredients, portions }: Ingredients) {
    const initialPortions = portions || 1;
    const [selectedPortions, setSelectedPortions] = useState(initialPortions);

    const handleChangePortions = (value: string) => {
        if (!isNaN(parseInt(value))) {
            setSelectedPortions(parseInt(value));
        }
    };

    const roundValue = (value: number) => {
        if (value == parseFloat(value.toFixed(2))) {
            return value;
        }
        return value.toFixed(2);
    };

    return (
        <TableContainer>
            <Table variant='striped' colorScheme='blackAlpha'>
                <Thead>
                    <Tr>
                        <Th
                            fontFamily='font'
                            fontWeight={700}
                            fontSize={12}
                            lineHeight='133%'
                            letterSpacing='0.05em'
                            color='#2db100'
                        >
                            ИНГРЕДИЕНТЫ
                        </Th>
                        <Th paddingInline='0px'>
                            <Flex
                                alignItems='center'
                                gap={{
                                    base: '12px',
                                    md: '16px',
                                }}
                                justifyContent='end'
                                fontFamily='font'
                            >
                                <Text
                                    fontWeight={700}
                                    fontSize={12}
                                    lineHeight='133%'
                                    letterSpacing='0.05em'
                                    color='#2db100'
                                >
                                    ПОРЦИЙ
                                </Text>
                                <TableNumberInput
                                    value={selectedPortions}
                                    handleChangeValue={handleChangePortions}
                                />
                            </Flex>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody
                    fontFamily='font'
                    fontWeight={400}
                    fontSize={14}
                    lineHeight='143%'
                    color='rgba(0, 0, 0, 0.92)'
                >
                    {ingredients.map((product, index) => (
                        <Tr key={index}>
                            <Td>{product.title}</Td>
                            <Td
                                textAlign='right'
                                fontWeight={500}
                                data-test-id={`ingredient-quantity-${index}`}
                            >
                                {product.measureUnit !== 'по вкусу' && product.count !== 'по вкусу'
                                    ? `${roundValue((parseFloat(product.count) * selectedPortions) / initialPortions)} ${product.measureUnit}`
                                    : product.measureUnit === 'по вкусу'
                                      ? product.measureUnit
                                      : product.count}
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
