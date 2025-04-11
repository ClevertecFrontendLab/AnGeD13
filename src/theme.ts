import { extendTheme } from '@chakra-ui/react';

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
    mdfooter: '769',
    big: '1024px',
    lg: '1440px',
    l: '1600px',
    xl: '1920px',
};

const theme = extendTheme({
    fonts: {
        font: `${customFonts.font}`,
        second: `${customFonts.second}`,
        third: `${customFonts.third}`,
    },
    fontWeights,
    breakpoints,
});

export default theme;
