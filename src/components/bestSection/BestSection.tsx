import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { Link } from 'react-router';

import { recipesHome } from '~/data/mainRecipesCard';
import H2 from '~/ui/headings/H2';
import { BreadcrumbsContext } from '~/utils/breadCrumbsContext';

import MainRecipeCard from '../mainRecipeCard/MainRecipeCard';

export default function BestSection() {
    const { path, setPath } = useContext(BreadcrumbsContext);

    const handleClick = (newTitle: string, newLink: string) => {
        if (path.length > 1) {
            setPath([
                { title: 'Главная', link: '/' },
                { title: newTitle, link: newLink },
            ]);
        } else {
            setPath([...path, { title: newTitle, link: newLink }]);
        }
    };

    return (
        <Flex
            as='section'
            flexDirection='column'
            rowGap={{
                base: '12px',
                lg: '16px',
                xl: '24px',
            }}
            fontFamily='font'
        >
            <Flex
                justifyContent='space-between'
                w={{
                    l: '100%',
                }}
            >
                <H2>Самое сочное</H2>
                <Link to='/best'>
                    <Button
                        onClick={() => handleClick('Самое сочное', '/best')}
                        display={{
                            base: 'none',
                            lg: 'flex',
                        }}
                        data-test-id='juiciest-link'
                        h={{
                            lg: '40px',
                            xl: '48px',
                        }}
                        borderRadius='6px'
                        paddingInline={{
                            lg: '16px',
                            xl: '24px',
                        }}
                        bg='#b1ff2e'
                        rightIcon={<ArrowForwardIcon />}
                        variant='solid'
                        fontWeight={600}
                        fontSize={{
                            lg: 16,
                            xl: 18,
                        }}
                        lineHeight={{
                            lg: '150%',
                            xl: '156%',
                        }}
                        color='#000'
                        transition='all 0.2s'
                    >
                        Вся подборка
                    </Button>
                </Link>
            </Flex>
            <Flex
                flexWrap='wrap'
                justifyContent='center'
                gap={{
                    base: '12px',
                    md: '16px',
                    xl: '24px',
                }}
            >
                {recipesHome.map((item, index) => (
                    <MainRecipeCard key={index} {...item} />
                ))}
            </Flex>
            <Flex
                justifyContent='center'
                display={{
                    base: 'flex',
                    lg: 'none',
                }}
            >
                <Link to='/best'>
                    <Button
                        data-test-id='juiciest-link-mobile'
                        h='40px'
                        borderRadius='6px'
                        paddingInline='16px'
                        bg='#b1ff2e'
                        rightIcon={<ArrowForwardIcon />}
                        variant='solid'
                        fontWeight={600}
                        fontSize={16}
                        lineHeight='150%'
                        color='#000'
                        transition='all 0.2s'
                    >
                        Вся подборка
                    </Button>
                </Link>
            </Flex>
        </Flex>
    );
}
