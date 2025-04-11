import { Flex, useBreakpointValue } from '@chakra-ui/react';

import NotificationItem from '~/ui/notificationItem/NotificationItem';

import { BookmarkHeartIcon, CustomPeopleIcon, EmojiHeartEyesIcon } from '../icon/icons/Icons';

export default function Notification() {
    const iconSize = useBreakpointValue({ base: 12, lg: 16 }, { ssr: false });

    return (
        <Flex
            as='ol'
            position={{ base: 'static', lg: 'absolute' }}
            top='85px'
            right='0px'
            w='208px'
            h={{ base: '24px', lg: '200px' }}
            alignItems='center'
            flexDirection={{ base: 'row', lg: 'column' }}
            rowGap={{ base: '0px', lg: '24px' }}
            paddingLeft={{
                base: '8px',
                md: '16px',
                lg: '67px',
            }}
            paddingRight={{
                base: '8px',
                md: '16px',
                lg: '56px',
            }}
            paddingBlock={{ base: '0px', lg: '16px' }}
            fontFamily='font'
            fontWeight={600}
            fontSize={{ base: 12, lg: 16 }}
            color='#2db100'
        >
            <NotificationItem>
                <BookmarkHeartIcon size={iconSize} />
                185
            </NotificationItem>
            <NotificationItem>
                <CustomPeopleIcon size={iconSize} />
                589
            </NotificationItem>
            <NotificationItem>
                <EmojiHeartEyesIcon size={iconSize} />
                587
            </NotificationItem>
        </Flex>
    );
}
