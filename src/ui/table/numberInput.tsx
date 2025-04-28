import {
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react';

interface Props {
    value: number;
    handleChangeValue: (value: string) => void;
}

export default function TableNumberInput({ value, handleChangeValue }: Props) {
    return (
        <NumberInput
            fontWeight={400}
            fontSize={16}
            lineHeight='150%'
            color='#000'
            defaultValue={1}
            min={1}
            size='md'
            maxW={{
                base: '73px',
                md: '90px',
            }}
            allowMouseWheel
            value={value}
            onChange={handleChangeValue}
        >
            <NumberInputField />
            <NumberInputStepper>
                <NumberIncrementStepper data-test-id='increment-stepper' />
                <NumberDecrementStepper data-test-id='decrement-stepper' />
            </NumberInputStepper>
        </NumberInput>
    );
}
