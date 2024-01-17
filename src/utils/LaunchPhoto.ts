import { Dispatch, SetStateAction } from 'react';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
  OptionsCommon,
} from 'react-native-image-picker';

import {
  requestCameraPermission,
  requestExternalWritePermission,
} from './Permissions.ts';
import { toggleNewValue } from './SaveChanges.ts';

interface openImagePickerProps<T> {
  setSelectedImage: Dispatch<SetStateAction<T>>;
  type: string;
}

const options: OptionsCommon = {
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 2000,
  maxWidth: 2000,
};

export const openImagePicker = async ({
  setSelectedImage,
  type,
}: openImagePickerProps<string | number | {} | undefined>) => {
  switch (type) {
    case 'gallery':
      requestExternalWritePermission().then(() => {
        launchImageLibrary(options, async (response: ImagePickerResponse) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorCode) {
            console.log('Image picker error: ', response.errorMessage);
          } else {
            let imageUri = response.assets?.[0]?.uri;
            await toggleNewValue({newValue: imageUri, setNewValue: setSelectedImage, key: 'imageBg'});
          }
        });
      });
      break;
    case 'camera':
      requestCameraPermission().then(() => {
        launchCamera(options, async (response: ImagePickerResponse) => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.errorCode) {
            console.log('Camera Error: ', response.errorMessage);
          } else {
            let imageUri = response.assets?.[0]?.uri;
            await toggleNewValue({newValue: imageUri, setNewValue: setSelectedImage, key: 'imageBg'});
          }
        });
      });
      break;
    default:
      return undefined;
  }
};
