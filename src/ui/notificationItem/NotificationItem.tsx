import { Flex } from '@chakra-ui/react';

type NotificationItemProps = {
    children: React.ReactNode;
};

export default function NotificationItem({ children }: NotificationItemProps) {
    return (
        <Flex
            as='li'
            h={{ base: '24px', lg: '40px' }}
            columnGap={{ base: '6px', lg: '8px' }}
            alignItems='center'
            paddingInline={{ base: '8px', lg: '16px' }}
        >
            {children}
        </Flex>
    );
}
