import { Flex, Heading, Text } from '@chakra-ui/react';

interface NutritionProps {
    title: string;
    value: number;
    measure: string;
}

export default function NutritionCard({ title, value, measure }: NutritionProps) {
    return (
        <Flex
            flexDirection={{
                base: 'row',
                md: 'column',
            }}
            alignItems='center'
            justifyContent='space-between'
            rowGap='12px'
            w={{
                base: '100%',
                md: '173px',
                lg: '136px',
                xl: '149px',
            }}
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='16px'
            padding='16px'
            fontFamily='font'
        >
            <Heading
                as='h4'
                fontWeight={400}
                fontSize={14}
                lineHeight='143%'
                color='rgba(0, 0, 0, 0.48)'
                w={{
                    base: '118px',
                    md: '100%',
                }}
                textAlign='center'
            >
                {title}
            </Heading>
            <Text
                fontWeight={500}
                fontSize={{
                    base: 24,
                    md: 36,
                }}
                lineHeight={{
                    base: '133%',
                    md: '111%',
                }}
                color='#134b00'
            >
                {value}
            </Text>
            <Text
                w='61px'
                textAlign='center'
                fontWeight={600}
                fontSize={{
                    base: 12,
                    md: 14,
                }}
                lineHeight={{
                    base: '133%',
                    md: '143%',
                }}
                color='rgba(0, 0, 0, 0.92)'
                textTransform='uppercase'
            >
                {measure}
            </Text>
        </Flex>
    );
}
