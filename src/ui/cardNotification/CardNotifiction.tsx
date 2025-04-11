import { Flex } from '@chakra-ui/react';

import { BookmarkHeartIcon, EmojiHeartEyesIcon } from '../../components/icon/icons/Icons';

interface Props {
    bookmark?: number;
    emoji?: number;
}

export default function CardNotification({ bookmark, emoji }: Props) {
    return (
        <Flex columnGap='8px' fontWeight={600} fontSize={12} lineHeight='133%' color='#2db100'>
            {bookmark && (
                <Flex columnGap='6px' p='4px' alignItems='center'>
                    <BookmarkHeartIcon size={12} />
                    {bookmark}
                </Flex>
            )}
            {emoji && (
                <Flex columnGap='6px' p='4px' alignItems='center'>
                    <EmojiHeartEyesIcon size={12} />
                    {emoji}
                </Flex>
            )}
        </Flex>
    );
}
