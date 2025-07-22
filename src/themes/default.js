// Theme Provider

import { primitives, semantic, components } from '../tokens';

export const defaultTheme = {
    name: 'default',
    colors: semantic.colors,
    typography: semantic.typography,
    spacing: semantic.spacing,
    components: components,
    // Theme-spezifische Overrides
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    }
};
