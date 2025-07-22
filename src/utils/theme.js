// 

import { createContext, useContext } from 'react';
import { defaultTheme } from '../themes';

const ThemeContext = createContext(defaultTheme);

export const ThemeProvider = ({ theme = defaultTheme, children }) => (
    <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
