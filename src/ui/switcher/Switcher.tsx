import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import { useContext } from 'react';

import { BreadcrumbsContext } from '~/contexts/breadCrumbsContext';

interface Props {
    parent: string;
}

export default function Switcher({ parent }: Props) {
    const { isActiveSwitcher, setIsActiveSwitcher, setFilterIngredients } =
        useContext(BreadcrumbsContext);
    const toggleSwitch = () => {
        if (isActiveSwitcher) {
            setFilterIngredients([]);
        }
        setIsActiveSwitcher((prev: boolean) => !prev);
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
                isChecked={isActiveSwitcher}
                onChange={toggleSwitch}
            />
        </FormControl>
    );
}
