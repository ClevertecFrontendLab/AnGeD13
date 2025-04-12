import { Heading } from '@chakra-ui/react';

interface Props {
    children: string;
}

export default function H2({ children }: Props) {
    return (
        <Heading
            as='h2'
            fontFamily='font'
            fontWeight={500}
            fontSize={{
                base: 24,
                lg: 36,
                xl: 48,
            }}
            lineHeight={{
                base: '133%',
                lg: '111%',
                xl: '100%',
            }}
            color='#000'
        >
            {children}
        </Heading>
    );
}
