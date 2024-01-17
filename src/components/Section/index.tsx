import React from 'react';
import { Text,View } from 'react-native';

import { UseFontSizeContext } from '../../context/FontSizeContext.tsx';
import { UseThemeContext } from '../../context/ThemeContext.tsx';
import { styles } from './styles.ts';

interface SectionProps {
  children: React.ReactNode,
  title: string,
}

//Global component for butty
const Section = ({children, title}: SectionProps) => {
  const {theme} = UseThemeContext();
  const {fontSize} = UseFontSizeContext();

  return (
    <View style={[styles.section, {backgroundColor: theme === 'light' ? 'white' : 'black'}]}>
      <View style={styles.titleSection}>
      <Text style={{color: theme === 'light' ? 'black' : 'white', fontSize}}>
        {title}
      </Text>
      </View>
      <View style={styles.childrenSection}>
      {children}
      </View>
    </View>
  );
};

export default Section;
