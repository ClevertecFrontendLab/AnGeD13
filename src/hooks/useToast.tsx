import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
    useToast as useChakraToast,
    UseToastOptions,
} from '@chakra-ui/react';

type ToastType = 'error';

export const useToast = () => {
    const toast = useChakraToast();
    const styles: Record<ToastType, UseToastOptions> = {
        error: {
            containerStyle: {
                bg: 'error.400',
                borderRadius: 'unset',
                w: {
                    base: '328px',
                    md: '400px',
                },
            },
        },
    };

    const showToast = (type: ToastType, title: string, description: string) =>
        toast({
            title: title,
            description: description,
            status: type,
            duration: 3000,
            isClosable: true,
            variant: 'solid',
            ...styles[type],
            render: ({ onClose }) => (
                <Alert
                    w={{ base: '328px', lg: '400px' }}
                    data-test-id='error-notification'
                    variant='solid'
                    status={type}
                    bg='#e53e3e'
                    color='white'
                    fontFamily='font'
                    fontSize={16}
                    fontWeight={400}
                    lineHeight='150%'
                    padding='12px'
                >
                    <AlertIcon />
                    <Box flexGrow={1}>
                        <AlertTitle fontWeight={700}>{title}</AlertTitle>
                        <AlertDescription>{description}</AlertDescription>
                    </Box>
                    <CloseButton
                        data-test-id='close-alert-button'
                        alignSelf='flex-start'
                        onClick={onClose}
                    />
                </Alert>
            ),
        });
    return {
        showError: (title: string, description: string) => showToast('error', title, description),
    };
};
