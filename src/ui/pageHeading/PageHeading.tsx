import { Heading } from '@chakra-ui/react';

interface HeadingProps {
    children: string;
}

export default function PageHeading({ children }: HeadingProps) {
    return (
        <Heading
            as='h1'
            fontFamily='font'
            fontWeight={700}
            fontSize={{
                base: 24,
                lg: 48,
            }}
            lineHeight={{
                base: '133%',
                lg: '100%',
            }}
            color='#000'
            paddingTop={{
                base: '16px',
                lg: '32px',
            }}
        >
            {children}
        </Heading>
    );
}
