import { Box, CircularProgress, Flex } from '@chakra-ui/react';

export default function Loader() {
    return (
        <Flex
            position='absolute'
            top='0px'
            left='0px'
            w='100%'
            h='100%'
            bg='rgba(0, 0, 0, 0.16)'
            zIndex={4}
            backdropFilter='blur(4px)'
            justifyContent='center'
            alignItems='center'
        >
            <Flex
                position='absolute'
                top='calc(50vh)'
                w={{
                    base: '134px',
                    md: '206px',
                }}
                h={{
                    base: '134px',
                    md: '206px',
                }}
                justifyContent='center'
                alignItems='center'
                opacity={0.7}
                borderRadius='50%'
                bg='radial-gradient( #C4FF61 0%, transparent 100%)'
            >
                <Box
                    w={{
                        base: '24px',
                        md: '37px',
                    }}
                    h={{
                        base: '24px',
                        md: '37px',
                    }}
                >
                    <CircularProgress
                        data-test-id='app-loader'
                        isIndeterminate
                        capIsRound={true}
                        value={70}
                        size='100%'
                        color='black'
                        trackColor='transparent'
                        thickness='6px'
                    />
                </Box>
            </Flex>
        </Flex>
    );
}
