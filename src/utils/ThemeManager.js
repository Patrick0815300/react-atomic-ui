// Theme manger for dynamic change
import { useState, useEffect } from 'react';
import { defaultTheme } from '../themes/default';
import { automotiveTheme } from '../themes/automotive';

const themes = {
    default: defaultTheme,
    automotive: automotiveTheme
};

export const useThemeManager = () => {
    const [currentTheme, setCurrentTheme] = useState('default');

    const switchTheme = (themeName) => {
        if (themes[themeName]) {
            setCurrentTheme(themeName);
            // Speichere Präferenz
            localStorage.setItem('selectedTheme', themeName);
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme && themes[savedTheme]) {
            setCurrentTheme(savedTheme);
        }
    }, []);

    return {
        currentTheme: themes[currentTheme],
        switchTheme,
        availableThemes: Object.keys(themes)
    };
};
