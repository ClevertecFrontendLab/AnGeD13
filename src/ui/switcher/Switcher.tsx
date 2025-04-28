import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface Props {
    parent: string;
    isAllergensSwitch: boolean;
    setFilterIngredients: Dispatch<SetStateAction<string[]>>;
    setIsAllergensSwitch: Dispatch<SetStateAction<boolean>>;
}

export default function Switcher({
    parent,
    isAllergensSwitch,
    setFilterIngredients,
    setIsAllergensSwitch,
}: Props) {
    const toggleSwitch = () => {
        if (isAllergensSwitch) {
            setFilterIngredients([]);
        }
        setIsAllergensSwitch((prev: boolean) => !prev);
    };

    return (
        <FormControl display='flex' alignItems='center'>
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
            <Switch
                data-test-id={`allergens-switcher${parent === 'filter' ? '-filter' : ''}`}
                colorScheme='lime'
                isChecked={isAllergensSwitch}
                onChange={toggleSwitch}
            />
        </FormControl>
    );
}
