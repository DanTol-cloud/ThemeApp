import React from 'react';
import { ImageBackground, SafeAreaView } from 'react-native';

import {UseThemeContext} from '../../context/ThemeContext.tsx';
import { styles } from './styles.ts';

interface ImageBackgroundComponentProps {
  children: React.ReactNode,
  image: string | undefined
}

// background image which can be changed
const ImageBackgroundComponent = ({children, image}: ImageBackgroundComponentProps) => {
  const {whiteTheme} = UseThemeContext();

  return (
    <SafeAreaView
      style={{backgroundColor: whiteTheme}}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="cover"
        style={styles.background}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ImageBackgroundComponent;
