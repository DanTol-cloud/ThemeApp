import { Fragment } from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {UseFontSizeContext} from '../../context/FontSizeContext.tsx';
import {UseThemeContext} from '../../context/ThemeContext.tsx';
import Section from '../Section';
import { fontSizeInterface, fontSizes } from './data.ts';
import { styles } from './styles.ts';

//Buttons to chose the font size
const FontChangeButton = () => {
  const {blackTheme, whiteTheme} = UseThemeContext();
  const {fontSize, toggleFontSize} = UseFontSizeContext();
  const handleFontSizeChange = (size: number) => {
    toggleFontSize(size);
  };

  return (
    <Section title={'Change font size:'}>
      {fontSizes.map((item: fontSizeInterface) => (
        <Fragment key={item.name}>
        <TouchableOpacity style={[styles.fontSizeBlock, {backgroundColor: blackTheme}]} onPress={() => handleFontSizeChange(item.size)}>
          <Text style={[styles.fontText, {color: whiteTheme, fontSize}]}>
            {item.size}{' '}
          </Text>
        </TouchableOpacity>
        </Fragment>
      ))}
    </Section>
  );
};

export default FontChangeButton;
