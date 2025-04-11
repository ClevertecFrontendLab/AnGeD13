import { SearchIcon } from '@chakra-ui/icons';
import { IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

export default function Searcher() {
    return (
        <InputGroup
            w={{
                base: '284px',
                md: '404px',
                lg: '458px',
            }}
        >
            <Input
                h={{
                    base: '32px',
                    lg: '48px',
                }}
                placeholder='Название или ингредиент...'
                padding={0}
                paddingLeft={{
                    base: '12px',
                    lg: '16px',
                }}
                fontFamily='font'
                fontWeight={400}
                fontSize={{
                    base: 14,
                    lg: 18,
                }}
                border='1px solid rgba(0, 0, 0, 0.48)'
                borderRadius='6px'
                color='#134b00'
                outline='none'
                sx={{
                    '::placeholder': {
                        color: '#134b00',
                    },
                }}
                focusBorderColor='#134b00'
            />
            <InputRightElement
                h={{
                    base: '32px',
                    lg: '48px',
                }}
                w={{
                    base: '32px',
                    lg: '48px',
                }}
            >
                <IconButton
                    h='100%'
                    w='100%'
                    minWidth='32px'
                    bg='transparent'
                    aria-label='Search database'
                    icon={
                        <SearchIcon
                            w={{
                                base: '14px',
                                lg: '18px',
                            }}
                            h={{
                                base: '14px',
                                lg: '18px',
                            }}
                        />
                    }
                    _hover={{
                        bg: '#ffffd3',
                    }}
                    _active={{
                        bg: '#eaffc7',
                    }}
                />
            </InputRightElement>
        </InputGroup>
    );
}
