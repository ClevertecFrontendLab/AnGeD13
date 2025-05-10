import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
    Flex,
} from '@chakra-ui/react';

import { AlertProps } from '~/hooks/useAlert';

type AlertWindowProps = {
    visible: boolean;
    alertProps: AlertProps | null;
    closeAlert: () => void;
};

export default function CustomAlert({ visible, alertProps, closeAlert }: AlertWindowProps) {
    if (!visible || !alertProps) return null;

    return (
        <Box
            position='relative'
            h={{
                base: 'calc(100vh - 64px)',
                mdfooter: 'calc(100vh - 80px)',
            }}
        >
            <Flex
                position='absolute'
                bottom='80px'
                left='calc(25%)'
                justifyContent='center'
                zIndex={3}
            >
                <Alert
                    data-test-id='error-notification'
                    justifyContent='space-between'
                    padding='12px'
                    w={{
                        base: '328px',
                        lg: '400px',
                    }}
                    status='error'
                    color='white'
                    fontFamily='font'
                    fontSize={16}
                    lineHeight='150%'
                    bg='#e53e3e'
                >
                    <AlertIcon color='white' />
                    <Box>
                        <AlertTitle fontWeight={700}>
                            Ошибка сервера
                            {alertProps.title}
                        </AlertTitle>
                        <AlertDescription fontWeight={400}>
                            Попробуйте поискать снова попозже
                            {alertProps.description}
                        </AlertDescription>
                    </Box>
                    <CloseButton
                        data-test-id='close-alert-button'
                        alignSelf='flex-start'
                        position='relative'
                        right={-1}
                        top={-1}
                        onClick={closeAlert}
                    />
                </Alert>
            </Flex>
        </Box>
    );
}
