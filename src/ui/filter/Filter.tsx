import { IconButton, useBreakpointValue } from '@chakra-ui/react';

import { FilterIcon } from '~/components/icon/icons/Icons';

export default function Filter() {
    const iconSize = useBreakpointValue({ base: 14, lg: 24 }, { ssr: false });
    return (
        <IconButton
            width={{
                base: '32px',
                lg: '48px',
            }}
            height={{
                base: '32px',
                lg: '48px',
            }}
            minWidth='32px'
            border='1px solid rgba(0, 0, 0, 0.48)'
            bg='transparent'
            aria-label='filter'
            icon={<FilterIcon size={iconSize} />}
            transition='all 0.2s'
            _hover={{
                bg: '#ffffd3',
            }}
            _active={{
                bg: '#eaffc7',
            }}
        />
    );
}
