import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Heading } from '@chakra-ui/react';

import { blogs } from '~/data/blogs';

import BlogCard from '../blogCard/BlogCard';

export default function Blogs() {
    return (
        <Flex
            as='section'
            flexDirection='column'
            rowGap={{
                base: '12px',
                lg: '16px',
                xl: '24px',
            }}
            bg='#c4ff61'
            borderRadius='16px'
            padding={{
                base: '12px',
                lg: '24px',
            }}
            fontFamily='font'
        >
            <Flex
                w='100%'
                h={{
                    base: '32px',
                    lg: '40px',
                    xl: '48px',
                }}
                justifyContent='space-between'
            >
                <Heading
                    as='h2'
                    fontFamily='font'
                    fontWeight={{
                        base: 500,
                        xl: 400,
                    }}
                    fontSize={{
                        base: 24,
                        lg: 30,
                        xl: 36,
                    }}
                    lineHeight={{
                        base: '133%',
                        lg: '120%',
                        xl: '111%',
                    }}
                    color='#000'
                >
                    Кулинарные блоги
                </Heading>
                <Button
                    display={{
                        base: 'none',
                        lg: 'flex',
                    }}
                    h='48px'
                    alignItems='center'
                    columnGap='8px'
                    paddingInline='24px'
                    fontWeight={600}
                    fontSize={18}
                    lineHeight='156%'
                    color='#000'
                    bg='transparent'
                    rightIcon={<ArrowForwardIcon />}
                >
                    Все авторы
                </Button>
            </Flex>
            <Flex
                flexDirection={{
                    base: 'column',
                    md: 'row',
                }}
                gap={{
                    base: '12px',
                    lg: '16px',
                }}
            >
                {blogs.map((item, index) => (
                    <BlogCard key={index} {...item} />
                ))}
            </Flex>
            <Button
                display={{
                    base: 'flex',
                    lg: 'none',
                }}
                h='40px'
                w='149px'
                alignSelf='center'
                columnGap='8px'
                paddingInline='16px'
                fontWeight={600}
                fontSize={16}
                lineHeight='150%'
                color='#000'
                bg='transparent'
                rightIcon={<ArrowForwardIcon />}
            >
                Все авторы
            </Button>
        </Flex>
    );
}
