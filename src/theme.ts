import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle, extendTheme } from '@chakra-ui/react';

const customFonts = {
    font: `"Inter", sans-serif`,
    second: `"Roboto", sans-serif`,
    third: `"Rubik", sans-serif`,
};

const fontWeights = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
};

const breakpoints = {
    base: '0px',
    sm: '360px',
    lit: '600',
    md: '768px',
    mdfooter: '769px',
    big: '1024px',
    lg: '1440px',
    l: '1600px',
    xl: '1920px',
};

const customColors = {
    lime: {
        500: '#b1ff2e',
    },
};

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    checkboxAnatomy.keys,
);

const baseStyle = definePartsStyle({
    control: defineStyle({
        border: '2px solid',
        borderRadius: '2px',
        borderColor: '#d7ff94',
    }),
});

const checkboxTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
    components: { Checkbox: checkboxTheme },
    fonts: {
        font: `${customFonts.font}`,
        second: `${customFonts.second}`,
        third: `${customFonts.third}`,
    },
    fontWeights,
    breakpoints,
    colors: customColors,
});

export default theme;
