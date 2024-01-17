import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface getSavedChangesProps<T> {
  setValue: React.Dispatch<React.SetStateAction<T>>;
  key: string;
}

const hasNumber = (str: string) => {
  return /\d/.test(str);
};

export const getSavedChanges = async ({
  setValue,
  key,
}: getSavedChangesProps<string | number | {} | undefined>) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      if (hasNumber(value) && !value.includes('file://')) {
        setValue(parseInt(value, 10));
      }  else if (value.includes('{')){
        setValue(JSON.parse(value));
      } else {
        setValue(value);
      }
    }
  } catch (error) {
    console.log('Error loading settings:', error);
  }
};

interface toggleNewValueProps<T> {
  newValue: T;
  setNewValue: (newValue: T) => void;
  key: string;
}

export const toggleNewValue = async ({
  newValue,
  setNewValue,
  key,
}: toggleNewValueProps<string | number | {} | undefined>) => {
  if (newValue) {
    setNewValue(newValue);
    if (typeof newValue === 'string') {
      await AsyncStorage.setItem(key, newValue);
    } else if (typeof newValue === 'object'){
      await AsyncStorage.setItem(key, JSON.stringify(newValue));
    } else {
      await AsyncStorage.setItem(key, String(newValue));
    }
  }
};
