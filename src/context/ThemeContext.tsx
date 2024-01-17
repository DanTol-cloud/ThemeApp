import React, {createContext, useContext,useEffect, useState} from 'react';

import {getSavedChanges, toggleNewValue} from '../utils/SaveChanges.ts';

interface ThemeContextInterface<T> {
  theme: T;
  handleToggleTheme: (newTheme: string) => void;
  whiteTheme: string,
  blackTheme: string,
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

//context to change app theme(light, black)
const ThemeContext = createContext<ThemeContextInterface<string | number | {} | undefined>>({
  theme: 'light',
  handleToggleTheme: () => {},
  whiteTheme: 'white',
  blackTheme: 'black',
});

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<string | number | {} | undefined>('light');

  //Effect to get last chosen theme from async storage
  useEffect(() => {
    const getTheme = async () => {
      await getSavedChanges({setValue: setTheme, key: 'theme'});
    };
    getTheme();
  }, []);

  //set new theme and save to async storage
  const toggleTheme = async (newTheme: string) => {
    await toggleNewValue({
      newValue: newTheme,
      setNewValue: setTheme,
      key: 'theme',
    });
  };

  const handleToggleTheme = (newTheme: string) => {
    toggleTheme(newTheme);
  };

  //default colors for app
  const whiteTheme = theme === 'light' ? 'white' : 'black';
  const blackTheme = theme === 'dark' ? 'white' : 'black';

  return (
    <ThemeContext.Provider value={{theme, handleToggleTheme, whiteTheme, blackTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseThemeContext = () => useContext(ThemeContext);
