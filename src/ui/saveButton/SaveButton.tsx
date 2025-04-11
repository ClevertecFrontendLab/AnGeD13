import { Button, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';

import { BookmarkHeartIcon } from '~/components/icon/icons/Icons';

export default function SaveButton() {
    const iconSize = useBreakpointValue({ base: 12, lg: 14 }, { ssr: false });
    return (
        <>
            <IconButton
                display={{
                    base: 'flex',
                    lg: 'none',
                }}
                w='24px'
                h='24px'
                minWidth='24px'
                aria-label='Save'
                bg='rgba(255, 255, 255, 0.06)'
                border='1px solid rgba(0, 0, 0, 0.48)'
                icon={<BookmarkHeartIcon size={iconSize} />}
            />
            <Button
                display={{
                    base: 'none',
                    lg: 'flex',
                }}
                w='122px'
                h='32px'
                leftIcon={<BookmarkHeartIcon size={iconSize} />}
                border='1px solid rgba(0, 0, 0, 0.48)'
                bg='rgba(255, 255, 255, 0.06)'
                p={0}
            >
                <Text
                    display={{
                        base: 'none',
                        lg: 'block',
                    }}
                    fontWeight={600}
                    fontSize={14}
                    lineHeight='143%'
                    color='rgba(0, 0, 0, 0.8)'
                >
                    Сохранить
                </Text>
            </Button>
        </>
    );
}
