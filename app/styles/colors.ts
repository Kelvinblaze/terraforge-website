// TerraForge Color Palette
export const colors = {
    // Primary Colors
    primary: '#E6FF0A',        // Neon Green - Primary Highlight
    secondary: '#FF6700',      // Orange - Secondary Accent

    // Base Colors
    black: '#000000',          // Primary Text/Background

    // Gray Scale
    gray600: '#606060',        // Supporting Gray 1
    gray400: '#999999',        // Supporting Gray 2
    grayLight: '#E9E9E9',      // Light Background

    // Semantic Colors
    background: {
        dark: '#000000',
        light: '#E9E9E9',
    },
    text: {
        primary: '#000000',
        inverse: '#FFFFFF',
        muted: '#606060',
    },
    accent: {
        neon: '#E6FF0A',
        orange: '#FF6700',
    }
} as const;
