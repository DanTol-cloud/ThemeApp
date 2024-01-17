import { Fragment, useState } from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {UseFontSizeContext} from '../../context/FontSizeContext.tsx';
import { UseThemeContext } from '../../context/ThemeContext.tsx';
import { defaultIconsValueInterface } from '../../utils/Consts.ts';
import { toggleNewValue } from '../../utils/SaveChanges.ts';
import Section from '../Section';
import { icons, iconsInterface } from './data.ts';
import { styles } from './styles.ts';

interface IconChangeButtonProps {
  newIcon: defaultIconsValueInterface,
  setNewIcon: (obj: defaultIconsValueInterface) => void,
}

//Buttons to change icons
const IconChangeButton = ({newIcon, setNewIcon}: IconChangeButtonProps) => {
  const {fontSize} = UseFontSizeContext();
  const {whiteTheme, blackTheme} = UseThemeContext();
  const [activeElements, setActiveElements] = useState<number[]>([]);
  const handleIconChange = async (iconType: string, iconName: string) => {
    setNewIcon({...newIcon, [iconType]: iconName});

    // @ts-ignore
    await toggleNewValue({newValue: {...newIcon, [iconType]: iconName}, setNewValue: setNewIcon, key: 'icons'});
  };

  //chose active icons
  const handleElementPress = (element: number, type: string) => {
    const elementsOfType = activeElements.filter(id => icons.find(item => item.id === id)?.type === type);

    if (elementsOfType.length === 2 || elementsOfType.length === 1 && elementsOfType[0] === element) {
      setActiveElements(activeElements.filter(item => item !== element));
    } else if (activeElements.length < 2) {
      setActiveElements([...activeElements, element]);
    } else {
      setActiveElements([element]);
    }
  };

  const isElementActive = (element: number) => {
    return activeElements.includes(element);
  };

  return (
    <Section title={'Change icons:'}>
      {icons.map((item: iconsInterface) => (
        <Fragment key={item.id}>
          <TouchableOpacity
            style={[styles.iconsBlock, {borderColor: isElementActive(item.id) ? blackTheme : whiteTheme}]}
            onPress={() => {
              handleIconChange(item.type, item.name);
              handleElementPress(item.id, item.type);
            }}>
            <Image
              style={{width: fontSize * 1.5, height: fontSize * 1.5}}
              source={item.icon}
            />
          </TouchableOpacity>
        </Fragment>
      ))}
    </Section>
  );
};

export default IconChangeButton;
