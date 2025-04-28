import { Button, Grid, Heading } from '@chakra-ui/react';

import CustomIcon from '../icon/CustomIcon';
import * as iconTypes from '../icon/icons/Icons';

interface Props {
    title: string;
    icon: keyof typeof iconTypes;
}

export default function RelevantListItem({ ...item }: Props) {
    return (
        <Grid
            as='article'
            h={{
                base: '48px',
                lg: '52px',
                xl: '56px',
            }}
            templateColumns={{
                base: '24px auto 70px',
                xl: '24px auto 87px',
            }}
            columnGap={{
                base: '8px',
                lg: '12px',
            }}
            alignItems='center'
            paddingInline={{
                base: '12px',
                xl: '24px',
            }}
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            transition='all 0.2s'
            _hover={{
                boxShadow:
                    '0 2px 4px -1px rgba(32, 126, 0, 0.06), 0 4px 6px -1px rgba(32, 126, 0, 0.1)',
            }}
        >
            <CustomIcon name={item.icon} size={24} />
            <Heading
                as='h3'
                fontWeight={500}
                fontSize={{
                    base: '16px',
                    lg: '18px',
                    xl: '20px',
                }}
                lineHeight={{
                    base: '150%',
                    lg: '156%',
                    xl: '140%',
                }}
                color='#000'
                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
            >
                {' '}
                {item.title}
            </Heading>
            <Button
                h={{
                    base: '24px',
                    lg: '32px',
                }}
                w={{
                    base: '70',
                    xl: '87px',
                }}
                fontWeight={600}
                fontSize={{
                    base: '12px',
                    xl: '14px',
                }}
                lineHeight={{
                    base: '133%',
                    xl: '143%',
                }}
                borderColor='#2db100'
                transition='all 0.2s'
                color='#2db100'
                variant='outline'
                _hover={{
                    bg: 'rgba(215, 255, 148, 0.3)',
                }}
                _active={{
                    bg: 'rgba(215, 255, 148, 0.7)',
                }}
            >
                Готовить
            </Button>
        </Grid>
    );
}
