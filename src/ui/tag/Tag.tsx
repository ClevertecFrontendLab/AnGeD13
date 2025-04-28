import { Flex } from '@chakra-ui/react';

import { TagCloseIcon } from '~/components/icon/icons/Icons';

interface TagProps {
    children: string;
}

export default function Tag({ children }: TagProps) {
    return (
        <Flex
            data-test-id='filter-tag'
            columnGap='8px'
            alignItems='center'
            h='24px'
            bg='#eaffc7'
            border='1px solid #b1ff2e'
            borderRadius='6px'
            padding='2px 8px'
            fontFamily='font'
            fontWeight={500}
            fontSize={14}
            lineHeight='143%'
            color='#207e00'
        >
            {children}
            <TagCloseIcon />
        </Flex>
    );
}
