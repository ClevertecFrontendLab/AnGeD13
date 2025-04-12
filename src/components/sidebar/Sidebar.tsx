import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

import { WriteRecipeIcon } from '../icon/icons/Icons';

export default function Sidebar() {
    return (
        <Box
            as='aside'
            display={{
                base: 'none',
                lg: 'block',
            }}
            position='fixed'
            h='calc(100vh - 80px)'
            right='0px'
            w='208px'
            marginTop='80px'
        >
            <Flex
                position='absolute'
                bottom='0px'
                right='0px'
                w='208px'
                flexDirection='column'
                alignItems='center'
                rowGap='12px'
                paddingTop='80px'
                paddingBottom='52px'
                bg='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(197, 255, 97, 0.1) 60%, rgba(255, 255, 255, 0) 100%)'
            >
                <IconButton
                    aria-label='Write recipe'
                    w='48px'
                    h='48px'
                    bg='#000'
                    isRound={true}
                    icon={<WriteRecipeIcon size={24} color='#FFFFD3' />}
                    _hover={{
                        bg: 'rgba(30, 30, 30, 0.3)',
                    }}
                    _active={{
                        bg: 'rgba(30, 30, 30, 0.7)',
                    }}
                />
                <Text
                    fontFamily='font'
                    fontWeight={400}
                    fontSize={12}
                    lineHeight='133%'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Записать рецепт
                </Text>
            </Flex>
        </Box>
    );
}
