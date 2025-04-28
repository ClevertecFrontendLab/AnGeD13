import { Flex, Heading } from '@chakra-ui/react';

import NutritionCard from './NutritionCard';

interface NutritionProps {
    nutrition: {
        calories: number;
        proteins: number;
        fats: number;
        carbohydrates: number;
    };
}

export default function NutritionSection({ nutrition }: NutritionProps) {
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
                <NutritionCard title='белки' value={nutrition.proteins} measure='ГРАММ' />
                <NutritionCard title='жиры' value={nutrition.fats} measure='ККАЛ' />
                <NutritionCard title='углеводы' value={nutrition.carbohydrates} measure='ККАЛ' />
            </Flex>
        </Flex>
    );
}
