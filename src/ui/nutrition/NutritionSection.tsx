import { Flex, Heading } from '@chakra-ui/react';

import { NutritionValueType } from '~/store/types';

import NutritionCard from './NutritionCard';

export default function NutritionSection({ ...nutrition }: NutritionValueType) {
    const getProteins = () => {
        if (nutrition.protein != undefined) return nutrition.protein;
        if (nutrition.proteins != undefined) return nutrition.proteins;
    };

    return (
        <Flex
            flexDirection='column'
            rowGap={{
                base: '12px',
                md: '20px',
            }}
        >
            <Heading
                as='h3'
                fontFamily='font'
                fontWeight={400}
                fontSize={14}
                lineHeight='143%'
                color='rgba(0, 0, 0, 0.8)'
            >
                * Калорийность на 1 порцию
            </Heading>
            <Flex
                flexDirection={{
                    base: 'column',
                    md: 'row',
                }}
                gap={{
                    base: '12px',
                    xl: '24px',
                }}
            >
                <NutritionCard title='калорийность' value={nutrition.calories} measure='ККАЛ' />
                <NutritionCard title='белки' value={getProteins()!} measure='ГРАММ' />
                <NutritionCard title='жиры' value={nutrition.fats} measure='ККАЛ' />
                <NutritionCard title='углеводы' value={nutrition.carbohydrates} measure='ККАЛ' />
            </Flex>
        </Flex>
    );
}
