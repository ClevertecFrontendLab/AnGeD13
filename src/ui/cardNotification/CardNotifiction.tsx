import { Flex } from '@chakra-ui/react';

import { BookmarkHeartIcon, EmojiHeartEyesIcon } from '../../components/icon/icons/Icons';

interface Props {
    bookmark?: number;
    likes?: number;
}

export default function CardNotification({ bookmark, likes }: Props) {
    return (
        <Flex columnGap='8px' fontWeight={600} fontSize={12} lineHeight='133%' color='#2db100'>
            {bookmark ? (
                <Flex columnGap='6px' p='4px' alignItems='center'>
                    <BookmarkHeartIcon size={12} />
                    {bookmark}
                </Flex>
            ) : null}
            {likes ? (
                <Flex columnGap='6px' p='4px' alignItems='center'>
                    <EmojiHeartEyesIcon size={12} />
                    {likes}
                </Flex>
            ) : null}
        </Flex>
    );
}
