import {PermissionsAndroid} from 'react-native';

export const requestCameraPermission = async () => {
  try {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
};

export const requestExternalWritePermission = async () => {
  try {
    return await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'External Storage Write Permission',
        message: 'App needs write permission',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
  } catch (err) {
    console.warn(err);
  }
};
