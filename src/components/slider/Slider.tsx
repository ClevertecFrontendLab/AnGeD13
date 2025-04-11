import { Flex, IconButton } from '@chakra-ui/react';

import { CustomArrowBackIcon, CustomArrowForwardIcon } from '../icon/icons/Icons';

export default function Slider() {
    return (
        <Flex
            display={{
                base: 'none',
                lg: 'flex',
            }}
            position='absolute'
            top='222px'
            left='-6px'
            w='101%'
            justifyContent='space-between'
        >
            <IconButton
                h='48px'
                w='48px'
                bg='#000'
                aria-label='Previous slide'
                icon={<CustomArrowBackIcon size={24} />}
                transition='all 0.2s'
                _hover={{
                    bg: 'rgb(179, 234, 85)',
                }}
            />
            <IconButton
                h='48px'
                w='48px'
                bg='#000'
                aria-label='Next slide'
                icon={<CustomArrowForwardIcon size={24} />}
                transition='all 0.2s'
                _hover={{
                    bg: 'rgba(179, 234, 85)',
                }}
            />
        </Flex>
    );
}
