import {TouchableOpacity, View} from 'react-native';

import BlackCameraSVG from '../../assets/icons/blackCameraSVG.tsx';
import BlackGallerySVG from '../../assets/icons/blackGallerySVG.tsx';
import SvgCamera from '../../assets/icons/cameraSVG.tsx';
import SvgGallery from '../../assets/icons/gallerySVG.tsx';
import {UseThemeContext} from '../../context/ThemeContext.tsx';
import { defaultIconsValueInterface } from '../../utils/Consts.ts';
import Section from '../Section';
import { styles } from './styles.ts';

interface ImagePickerButtonProps {
  handleCameraPress: () => void;
  handleGalleryPress: () => void;
  newIcon: defaultIconsValueInterface
}

//Panel with icons which you can chose
const ImagePickerButton = ({handleGalleryPress, handleCameraPress,  newIcon}: ImagePickerButtonProps) => {
  const {blackTheme} = UseThemeContext();

  return (
    <Section title={'Change background:'}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleGalleryPress}>
          {newIcon.gallery === 'GalleryIcon' ? (
            <SvgGallery color={blackTheme} />
          ) : (
            <BlackGallerySVG
              color={blackTheme}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCameraPress}>
          {newIcon.camera === 'CameraIcon' ? (
            <SvgCamera color={blackTheme} />
          ) : (
            <BlackCameraSVG color={blackTheme} />
          )}
        </TouchableOpacity>
      </View>
    </Section>
  );
};

export default ImagePickerButton;
