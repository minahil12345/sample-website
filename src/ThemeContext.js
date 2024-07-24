// src/ThemeContext.js
import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            ...(mode === 'light' ? {
                primary: {
                    main: '#3CBF27',
                },
                background: {
                    default: '#f0f2f5',
                    paper: '#ffffff',
                },
                text: {
                    primary: '#000000',
                },
            } : {
                primary: {
                    main: '#3CBF27',
                },
                background: {
                    default: '#303030',
                    paper: '#424242',
                },
                text: {
                    primary: '#ffffff',
                },
            }),
        },
        typography: {
            fontFamily: 'Roboto, Arial, sans-serif',
        },
    }), [mode]);

    const toggleTheme = () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default CustomThemeProvider;
