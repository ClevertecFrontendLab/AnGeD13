import { Box, Card, CardBody, Image, Text } from '@chakra-ui/react';

interface StepProps {
    step: {
        stepNumber: number;
        description: string;
        image: string;
    };
    index: number;
    len: number;
}

export default function RecipeStepCard({ step, index, len }: StepProps) {
    return (
        <Card
            flexDirection='row'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            boxShadow='none'
        >
            {step.image && (
                <Image
                    w={{
                        base: '158px',
                        lg: '346px',
                    }}
                    h={{
                        base: '128px',
                        lg: '244px',
                    }}
                    borderRadius='8px'
                    src={step.image}
                    alt='Картинка отображающая суть шага'
                />
            )}
            <CardBody
                display='flex'
                flexDirection='column'
                rowGap={{
                    base: '12px',
                    lg: '16px',
                }}
                fontFamily='font'
                padding={{
                    base: '8px 8px',
                    lg: '20px 24px',
                }}
            >
                <Box
                    h='24px'
                    w='57px'
                    borderRadius='4px'
                    padding='2px 8px'
                    bg={`${index === len ? '#ffffd3' : 'rgba(0, 0, 0, 0.06)'}`}
                    fontWeight={400}
                    fontSize={14}
                    lineHeight='143%'
                    color='#000'
                >
                    Шаг {step.stepNumber}
                </Box>
                <Text fontWeight={400} fontSize={14} lineHeight='143%' color='#000'>
                    {step.description}
                </Text>
            </CardBody>
        </Card>
    );
}
