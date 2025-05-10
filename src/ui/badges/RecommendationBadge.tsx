import { Avatar, Badge, Text } from '@chakra-ui/react';

interface Props {
    name?: string;
    surname?: string;
}

export default function RecommendationBadge({ name, surname }: Props) {
    const userName = `${name ? name : ''} ${surname ? surname : ''}`.trim();

    if (userName) {
        return (
            <Badge
                display={{
                    base: 'none',
                    lg: 'flex',
                }}
                position='absolute'
                left='24px'
                bottom='20px'
                h='28px'
                alignItems='center'
                columnGap='8px'
                textTransform='none'
                paddingInline='8px'
                bg='#d7ff94'
                borderRadius='4px'
            >
                <Avatar size='2xs' name={userName} />
                <Text fontWeight={400} fontSize={14} lineHeight='143%'>
                    {userName} рекомендует
                </Text>
            </Badge>
        );
    }
}
