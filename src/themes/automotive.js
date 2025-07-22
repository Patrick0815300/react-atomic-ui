// Multi-Theme-Unterstützung
// Verschiedene Themes für unterschiedliche Anwendungsfälle

import { primitives, semantic } from '../tokens';

export const automotiveTheme = {
    name: 'automotive',
    colors: {
        ...semantic.colors,
        primary: primitives.colors.red[600],
        secondary: primitives.colors.gray[800],
        // Kfz-spezifische Farben
        service: primitives.colors.blue[500],
        warning: primitives.colors.orange[500],
        emergency: primitives.colors.red[700]
    },
    components: {
        ...semantic.components,
        // Kfz-spezifische Komponenten-Styles
        serviceCard: {
            borderColor: primitives.colors.blue[200],
            backgroundColor: primitives.colors.blue[50]
        }
    }
};
