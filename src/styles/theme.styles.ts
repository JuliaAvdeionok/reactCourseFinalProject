import {sea} from './colors.styles';
import {baseFontFamily, fontSizeBase} from './variables.styles';

export interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    text: string;
    contrastText: string;
}

export interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    accent: PaletteColor;
    test: string;
}

export interface Theme {
    palette: Palette;
    typo: {
        fontFamily: string;
        fontSize: string;
    };
    header: {
        background: PaletteColor,
        height: number
    };
}

export const theme: Theme = {
    palette: {
        primary: sea,
        secondary: sea,
        error: sea,
        accent: sea,
        test: sea.light
    },
    typo: {
        fontFamily: baseFontFamily.join(','),
        fontSize: fontSizeBase
    },
    header: {
        background: sea,
        height: 60
    }
};
