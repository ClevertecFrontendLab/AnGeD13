import { Flex, Text } from '@chakra-ui/react';

import { ExitIcon } from '~/components/icon/icons/Icons';

export default function NavBarFooter() {
    return (
        <Flex
            as='footer'
            flexDirection='column'
            rowGap='16px'
            h='144px'
            fontSize={12}
            lineHeight='133%'
            paddingInline='24px'
        >
            <Text fontWeight={500} color='rgba(0, 0, 0, 0.24)'>
                Версия программы 03.25
            </Text>
            <Text w='157px' fontWeight={400} color='rgba(0, 0, 0, 0.64)'>
                Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
            </Text>
            <Flex as='a' href='' alignItems='center' columnGap='6px' fontWeight={600} color='#000'>
                <ExitIcon size={12} />
                <span>Выйти</span>
            </Flex>
        </Flex>
    );
}
