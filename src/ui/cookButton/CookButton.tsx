import { Button } from '@chakra-ui/react';

interface TestProps {
    index?: number;
}

export default function CookButton({ index }: TestProps) {
    return (
        <Button
            data-test-id={`card-link-${index}`}
            h={{
                base: '24px',
                lg: '32px',
            }}
            w={{
                base: '70px',
                lg: '87px',
            }}
            bg='rgba(0, 0, 0, 0.92)'
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='6px'
            fontWeight={600}
            fontSize={{
                base: 12,
                lg: 14,
            }}
            lineHeight={{
                base: '133%',
                lg: '143%',
            }}
            color='#fff'
            transition='all 0.2s'
            _hover={{
                bg: 'rgba(80, 80, 80)',
            }}
            _active={{
                bg: 'rgba(40, 40, 40)',
            }}
        >
            Готовить
        </Button>
    );
}
