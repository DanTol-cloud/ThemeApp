import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import ChatBlock from '../../components/ChatBlock';
import FontChangeButton from '../../components/FontChangeButton';
import IconChangeButton from '../../components/IconChangeButton';
import ImageBackgroundComponent from '../../components/ImageBackground';
import ImagePickerButton from '../../components/ImagePickerButton';
import Section from '../../components/Section';
import {UseFontSizeContext} from '../../context/FontSizeContext.tsx';
import {UseThemeContext} from '../../context/ThemeContext.tsx';
import { defaultIconsValue, defaultIconsValueInterface } from '../../utils/Consts.ts';
import {openImagePicker} from '../../utils/LaunchPhoto.ts';
import { getSavedChanges } from '../../utils/SaveChanges.ts';
import {styles} from './styles.ts';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState<string | number | {} | undefined >(
    '',
  );
  const [newIcon, setNewIcon] = useState<defaultIconsValueInterface>(defaultIconsValue);


  const {blackTheme, whiteTheme, handleToggleTheme} = UseThemeContext();
  const {fontSize} = UseFontSizeContext();

  useEffect(() => {
    const getPhoto = async () => {
      await getSavedChanges({setValue: setSelectedImage, key: 'imageBg'});
    };

    const getIcons = async () => {
      await getSavedChanges({setValue: setNewIcon, key: 'icons'});
    };

    getPhoto();
    getIcons();

  }, [setSelectedImage]);


  return (

      <View style={styles.container}>
        <ImageBackgroundComponent image={selectedImage}>
        <ChatBlock />
        </ImageBackgroundComponent>
        <ScrollView style={{flex: 1}}>
          <Section title={'change theme:'}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: blackTheme},
          ]}
          onPress={() => handleToggleTheme('dark')}>
          <Text
            style={{
              color: whiteTheme,
              fontSize: fontSize,
            }}>
            Black
          </Text>
        </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                {backgroundColor: blackTheme},
              ]}
              onPress={() => handleToggleTheme('light')}>
              <Text
                style={{ color: whiteTheme, fontSize: fontSize }}>
                Light
              </Text>
            </TouchableOpacity>
          </Section>
        <ImagePickerButton
          handleCameraPress={() =>
            openImagePicker({setSelectedImage, type: 'camera'})
          }
          handleGalleryPress={() =>
            openImagePicker({setSelectedImage, type: 'gallery'})
          }
         newIcon={newIcon}/>
        <FontChangeButton />
        <IconChangeButton newIcon={newIcon} setNewIcon={setNewIcon} />
        </ScrollView>
      </View>

  );
};

export default Home;
