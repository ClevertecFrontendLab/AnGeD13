import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

export default function Switcher() {
    return (
        <FormControl display='flex' alignItems='center' justifyContent='space-between'>
            <FormLabel
                htmlFor='allergy'
                mb='0'
                fontFamily='font'
                fontWeight={500}
                fontSize={16}
                color='#000'
            >
                Исключить мои аллергены
            </FormLabel>
            <Switch id='allergy' colorScheme='green' />
        </FormControl>
    );
}
