import React from 'react';

interface ColorContextType {
    mode: 'light' | 'dark';
    setMode: (mode: 'light' | 'dark') => void;
}

export const ColorContext = React.createContext<ColorContextType>({
    mode: 'light',
    setMode: () => {},
});