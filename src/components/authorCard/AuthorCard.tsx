import { Avatar, Button, Card, CardBody, CardFooter, Flex, Heading, Text } from '@chakra-ui/react';

import AvatarSrc from '../../assets/images/avatars/recipePageAvatar.png';
import { CustomLightPeopleIcon } from '../icon/icons/Icons';

export default function AuthorCard() {
    return (
        <Card
            w='100%'
            h={{
                base: '120px',
                md: '144px',
            }}
            bg='#c4ff61'
            padding={{
                base: '12px',
                md: '24px',
            }}
            columnGap={{
                base: '8px',
                md: '16px',
            }}
            flexDirection='row'
        >
            <Avatar size='xl' name='Сергей Разумов' src={AvatarSrc} />
            <Flex flexDirection='column' rowGap='16px' w='100%'>
                <CardBody p={0} position='relative'>
                    <Heading
                        as='h3'
                        fontFamily='font'
                        fontWeight={700}
                        fontSize={{
                            base: 18,
                            md: 24,
                        }}
                        lineHeight={{
                            base: '156%',
                            md: '133%',
                        }}
                        color='#000'
                    >
                        Сергей Разумов
                    </Heading>
                    <Text
                        fontFamily='font'
                        fontWeight={400}
                        fontSize={14}
                        lineHeight='143%'
                        color='rgba(0, 0, 0, 0.64)'
                    >
                        @serge25
                    </Text>
                    <Text
                        position='absolute'
                        top={{
                            base: '-6px',
                            md: '0px',
                        }}
                        right={{
                            base: '-4px',
                            md: '0px',
                        }}
                        fontFamily='font'
                        fontWeight={400}
                        fontSize={{
                            base: 12,
                            md: 14,
                        }}
                        lineHeight={{
                            base: '133%',
                            md: '143%',
                        }}
                        color='#000'
                    >
                        Автор рецепта
                    </Text>
                </CardBody>
                <CardFooter p={0} justifyContent='space-between'>
                    <Button
                        display='flex'
                        columnGap='6px'
                        h='24px'
                        bg='rgba(0, 0, 0, 0.92)'
                        border='r: 1px solid rgba(0, 0, 0, 0.08)'
                        padding='4px 8px'
                        fontFamily='font'
                        fontWeight={600}
                        fontSize={12}
                        lineHeight='133%'
                        color='#fff'
                    >
                        <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M0.75 10.5C0.75 10.5 0 10.5 0 9.75C0 9 0.75 6.75 4.5 6.75C8.25 6.75 9 9 9 9.75C9 10.5 8.25 10.5 8.25 10.5H0.75ZM4.5 6C5.09674 6 5.66903 5.76295 6.09099 5.34099C6.51295 4.91903 6.75 4.34674 6.75 3.75C6.75 3.15326 6.51295 2.58097 6.09099 2.15901C5.66903 1.73705 5.09674 1.5 4.5 1.5C3.90326 1.5 3.33097 1.73705 2.90901 2.15901C2.48705 2.58097 2.25 3.15326 2.25 3.75C2.25 4.34674 2.48705 4.91903 2.90901 5.34099C3.33097 5.76295 3.90326 6 4.5 6V6Z'
                                fill='white'
                            />
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M10.125 3.75C10.2245 3.75 10.3198 3.78951 10.3902 3.85984C10.4605 3.93016 10.5 4.02554 10.5 4.125V5.25H11.625C11.7245 5.25 11.8198 5.28951 11.8902 5.35984C11.9605 5.43016 12 5.52554 12 5.625C12 5.72446 11.9605 5.81984 11.8902 5.89016C11.8198 5.96049 11.7245 6 11.625 6H10.5V7.125C10.5 7.22446 10.4605 7.31984 10.3902 7.39017C10.3198 7.46049 10.2245 7.5 10.125 7.5C10.0255 7.5 9.93016 7.46049 9.85983 7.39017C9.78951 7.31984 9.75 7.22446 9.75 7.125V6H8.625C8.52554 6 8.43016 5.96049 8.35983 5.89016C8.28951 5.81984 8.25 5.72446 8.25 5.625C8.25 5.52554 8.28951 5.43016 8.35983 5.35984C8.43016 5.28951 8.52554 5.25 8.625 5.25H9.75V4.125C9.75 4.02554 9.78951 3.93016 9.85983 3.85984C9.93016 3.78951 10.0255 3.75 10.125 3.75Z'
                                fill='white'
                            />
                        </svg>
                        Подписаться
                    </Button>
                    <Flex h='24px' columnGap='6px' alignItems='center' paddingInline='4px'>
                        <CustomLightPeopleIcon size={12} />
                        <Text
                            fontFamily='font'
                            fontWeight={600}
                            fontSize={12}
                            lineHeight='133%'
                            color='#2db100'
                        >
                            125
                        </Text>
                    </Flex>
                </CardFooter>
            </Flex>
        </Card>
    );
}
