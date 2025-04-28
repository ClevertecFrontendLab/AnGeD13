import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useContext, useState } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';

export default function Searcher() {
    const { setFilterRecipeTitle } = useContext(BreadcrumbsContext);
    const [title, setTitle] = useState<string>('');

    const getTitle = () => {
        setFilterRecipeTitle(title.toLowerCase());
    };

    const handleKeyPress = (key: string) => {
        if (key === 'Enter' && title.length >= 3) {
            getTitle();
        }
    };

    const cleanInput = () => {
        setTitle('');
        setFilterRecipeTitle('');
    };

    return (
        <InputGroup
            w={{
                base: '284px',
                md: '404px',
                lg: '458px',
            }}
        >
            <Input
                data-test-id='search-input'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                onKeyDown={(event) => handleKeyPress(event.key)}
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
                paddingRight='120px'
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
                    base: '64px',
                    lg: '96px',
                }}
            >
                <Flex h='100%' w='100%' minWidth='32px' alignItems='center'>
                    {title && (
                        <IconButton
                            bg='transparent'
                            onClick={cleanInput}
                            aria-label='Clean input'
                            icon={
                                <CloseIcon
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
                        />
                    )}
                </Flex>
                <IconButton
                    data-test-id='search-button'
                    isDisabled={!(title.length >= 3)}
                    onClick={getTitle}
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
                    _disabled={{
                        bg: 'transparent',
                        pointerEvents: 'none',
                    }}
                />
            </InputRightElement>
        </InputGroup>
    );
}
