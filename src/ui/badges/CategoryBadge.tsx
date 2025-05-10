import { Badge } from '@chakra-ui/react';

import { SRC_BASE_URL } from '~/constants/paths';

interface Props {
    category: string | undefined;
    badgeIcon: string | undefined;
    bg: string;
    styles?: React.CSSProperties;
}

export default function CategoryBadge({ category, badgeIcon, bg, styles }: Props) {
    if (category) {
        return (
            <Badge
                h={6}
                p={{
                    base: '4px',
                    lg: '8px',
                }}
                bg={bg}
                paddingBlock='2px'
                display='flex'
                alignItems='center'
                columnGap={{
                    base: '2px',
                    lg: '8px',
                }}
                borderRadius='4px'
                fontWeight={400}
                fontSize={14}
                lineHeight='143%'
                textTransform='none'
                color='#000'
                sx={styles}
            >
                <img src={`${SRC_BASE_URL}/${badgeIcon}`} width='16px' height='16px' />
                {category}
            </Badge>
        );
    }
}
