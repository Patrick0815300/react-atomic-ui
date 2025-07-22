// Komponenten-Tokens (Anwendungsfall-spezifisch)
// Diese Tokens sind für spezifische Komponenten reserviert

export const semantic = {
    colors: {
        primary: primitives.colors.blue[500],
        secondary: primitives.colors.gray[600],
        success: primitives.colors.green[500],
        danger: primitives.colors.red[500],
        text: {
            primary: primitives.colors.gray[900],
            secondary: primitives.colors.gray[600],
            inverse: primitives.colors.gray[50]
        },
        background: {
            primary: primitives.colors.gray[50],
            secondary: primitives.colors.gray[100],
            inverse: primitives.colors.gray[900]
        }
    },
    typography: {
        fontFamily: {
            primary: primitives.fonts.primary,
            secondary: primitives.fonts.secondary
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem'
        }
    },
    spacing: primitives.spacing
};
