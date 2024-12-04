import React, {createContext, useContext, useState, useEffect} from 'react';
import {View} from 'react-native';
import themes from './theme.json';
import {setCSSVariables} from './cssVariables';

type ThemeMode = 'light' | 'dark';
type ColorScheme = 'blue' | 'red' | 'green' | 'purple';

interface ThemeContextType {
  mode: ThemeMode;
  colorScheme: ColorScheme;
  toggleTheme: () => void;
  setColorScheme: (scheme: ColorScheme) => void;
  colors: typeof themes.light.blue;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('blue');

  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const colors = themes[mode][colorScheme];

  const handleSetColorScheme = (scheme: ColorScheme) => {
    console.log('Setting color scheme to:', scheme);
    setColorScheme(scheme);
  };

  useEffect(() => {
    console.log('Theme updated:', { mode, colorScheme, colors });
    // Set CSS variables for Tailwind
    setCSSVariables(colors);
  }, [mode, colorScheme, colors]);

  const value = {
    mode,
    colorScheme,
    toggleTheme,
    setColorScheme: handleSetColorScheme,
    colors,
  };

  return (
    <ThemeContext.Provider value={value}>
      <View className="flex-1 bg-background">
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
