import React, {createContext, useContext, useEffect, useState} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {getSavedChanges, toggleNewValue} from '../utils/SaveChanges.ts';

interface FontSizeContextInterface<T> {
  fontSize: T;
  toggleFontSize: (newSize: number) => void;
}
interface FontSizeProviderProps {
  children: React.ReactNode;
}

const FontSizeContext = createContext<FontSizeContextInterface<string | number | {} | undefined>>({
  fontSize: 24,
  toggleFontSize: () => {},
});
//Context to change the font size
export const FontSizeProvider = ({children}: FontSizeProviderProps) => {
  const [fontSize, setFontSize] = useState<string | number | {} | undefined>(14);

  //Get the font size, which was last chosen from asyncStorage
  useEffect(() => {
    const getFontSize = async () => {
      await getSavedChanges({setValue: setFontSize, key: 'fontSize'});
      try {
        const savedFontSize = await AsyncStorage.getItem('fontSize');
        if (savedFontSize) {
          setFontSize(parseInt(savedFontSize, 10));
        }
      } catch (error) {
        console.log('Error loading font size:', error);
      }
    };
    getFontSize();
  }, []);

  //set new font size and save to async storage
  const toggleFontSize = async (newSize: number) => {
    await toggleNewValue({
      newValue: newSize,
      setNewValue: setFontSize,
      key: 'fontSize',
    });
  };
  return (
    <FontSizeContext.Provider value={{fontSize, toggleFontSize}}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const UseFontSizeContext = () => useContext(FontSizeContext);
