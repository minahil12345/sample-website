// src/components/Navbar.js
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const Navbar = () => {
    const { mode, toggleTheme } = useContext(ThemeContext);

    return (
        <AppBar 
            position="static"
            sx={{ 
                backgroundColor: mode === 'light' ? '#EA8F0E' : '#69645C', 
                color: mode === 'light' ? 'black' : 'white' 
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography 
                    variant="h6" 
                    component="div"
                    sx={{ 
                        color: '#3CBF27', 
                        fontWeight: 'bold', 
                        fontStyle: 'italic', 
                        fontSize: mode === 'light' ? '26pt' : '26pt' 
                    }}
                >
                    Omegas
                </Typography>
                <div>
                    <NavLink 
                        to="/" 
                        style={({ isActive }) => ({
                            color: mode === 'light' ? (isActive ? 'white' : 'black') : (isActive ? 'black' : 'white'),
                            backgroundColor: mode === 'light' ? (isActive ? '#3CBF27' : 'transparent') : (isActive ? '#3CBF27' : 'transparent'),
                            fontSize: '14pt',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px'
                        })}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        style={({ isActive }) => ({
                            color: mode === 'light' ? (isActive ? 'white' : 'black') : (isActive ? 'black' : 'white'),
                            backgroundColor: mode === 'light' ? (isActive ? '#3CBF27' : 'transparent') : (isActive ? '#3CBF27' : 'transparent'),
                            fontSize: '14pt',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px'
                        })}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        style={({ isActive }) => ({
                            color: mode === 'light' ? (isActive ? 'white' : 'black') : (isActive ? 'black' : 'white'),
                            backgroundColor: mode === 'light' ? (isActive ? '#3CBF27' : 'transparent') : (isActive ? '#3CBF27' : 'transparent'),
                            fontSize: '14pt',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: '4px'
                        })}
                    >
                        Contact Us
                    </NavLink>
                    <IconButton 
                        color="inherit" 
                        onClick={toggleTheme}
                        sx={{ color: '#3CBF27' }}
                    >
                        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
