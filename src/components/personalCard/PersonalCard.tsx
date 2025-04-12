import { Avatar, Flex, Text } from '@chakra-ui/react';

import AvatarSrc from '../../assets/images/avatars/avatar.jpg';

export default function PersonalCard() {
    return (
        <Flex
            as='section'
            display={{
                base: 'none',
                lg: 'flex',
            }}
            h='48px'
            columnGap='12px'
            paddingLeft='53px'
            paddingRight='24px'
        >
            <Avatar src={AvatarSrc} />
            <div>
                <Text
                    as='h3'
                    fontFamily='font'
                    fontWeight={500}
                    fontSize={18}
                    lineHeight='156%'
                    color='#000'
                >
                    Екатерина Константинопольская
                </Text>
                <Text
                    as='h4'
                    fontFamily='font'
                    fontWeight={400}
                    fontSize={14}
                    lineHeight='143%'
                    color=' rgba(0, 0, 0, 0.64)'
                >
                    @bake_and_pie
                </Text>
            </div>
        </Flex>
    );
}
