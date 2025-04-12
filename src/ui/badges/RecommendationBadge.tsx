import { Avatar, Badge, Text } from '@chakra-ui/react';

interface Props {
    name: string;
    svgSrc: string;
}

export default function RecommendationBadge({ name, svgSrc }: Props) {
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
            <Avatar size='2xs' name={name} src={svgSrc} />
            <Text fontWeight={400} fontSize={14} lineHeight='143%'>
                {name} рекомендует
            </Text>
        </Badge>
    );
}
