import { Badge } from '@chakra-ui/react';

import CustomIcon from '~/components/icon/CustomIcon';

import * as iconTypes from '../../components/icon/icons/Icons';

interface Props {
    category: string;
    badgeIcon: keyof typeof iconTypes;
    bg: string;
    styles?: React.CSSProperties;
}

export default function CategoryBadge({ category, badgeIcon, bg, styles }: Props) {
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
            <CustomIcon name={badgeIcon} size={16} />
            {category}
        </Badge>
    );
}
