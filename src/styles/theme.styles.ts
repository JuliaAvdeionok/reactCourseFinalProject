import { sea } from './colors.styles';
import { baseFontFamily, boarderRadius, fontSizeBase } from './variables.styles';

export interface PaletteColor {
    base: string;
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
    card: {
        boarderRadius: number,
        background: PaletteColor
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
    },
    card: {
        boarderRadius: boarderRadius,
        background: sea
    }
};
