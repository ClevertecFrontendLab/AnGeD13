import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useContext, useState } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';
import { useAppDispatch } from '~/store/hooks';
import { setAllergensFilter, setSearchString } from '~/store/recipe-slice';

interface Props {
    isTitleMatch: boolean | null;
    setIsStartSearching?: Dispatch<SetStateAction<boolean>>;
}

export default function Searcher({ isTitleMatch, setIsStartSearching }: Props) {
    const dispatch = useAppDispatch();

    const { filterRecipeTitle, setFilterRecipeTitle, filterIngredients, setIsSearching } =
        useContext(BreadcrumbsContext);
    const [title, setTitle] = useState<string>(filterRecipeTitle);

    const getTitle = () => {
        console.log('click');
        dispatch(setSearchString(title.trim()));
        dispatch(setAllergensFilter(filterIngredients));
        setIsSearching(true);
        setFilterRecipeTitle(title.toLowerCase());
        getBorder();
        if (setIsStartSearching) {
            setIsStartSearching(true);
        }
    };

    const handleKeyPress = (key: string) => {
        if (key === 'Enter' && title.length >= 3) {
            getTitle();
        }
    };

    const cleanInput = () => {
        setTitle('');
        setFilterRecipeTitle('');
        dispatch(setSearchString(''));
        dispatch(setAllergensFilter([]));
        setIsSearching(false);
    };

    const getBorder = () => {
        if (isTitleMatch === null) {
            return '1px solid rgba(0, 0, 0, 0.48)';
        } else {
            if (isTitleMatch === true) {
                return '1px solid #2db100';
            } else {
                return '2px solid #e53e3e';
            }
        }
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
                border={`${getBorder()}`}
                borderRadius='6px'
                color='#134b00'
                sx={{
                    '::placeholder': {
                        color: '#134b00',
                    },
                }}
                _focusVisible={{
                    border: `${getBorder()}`,
                }}
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
                            type='button'
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
                    type='button'
                    data-test-id='search-button'
                    isDisabled={!(title.length >= 3 || filterIngredients.length > 0)}
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
