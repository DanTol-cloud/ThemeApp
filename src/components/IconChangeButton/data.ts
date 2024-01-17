import { ImageSourcePropType } from 'react-native';

import CameraIcon from '../../assets/CameraIcon.png';
import CameraIconBlack from '../../assets/CameraIconBlack.png';
import GalleryIcon from '../../assets/GalleryIcon.png';
import GalleryIconBlack from '../../assets/GalleryIconBlack.png';

export interface iconsInterface {
  id: number,
  name: string,
  type: string,
  icon: ImageSourcePropType | undefined,
}

export const icons = [
  {
    id: 1,
    name: 'CameraIcon',
    type: 'camera',
    icon: CameraIcon,
  },
  {
    id: 2,
    name: 'CameraIconBlack',
    type: 'camera',
    icon: CameraIconBlack,
  },
  {
    id: 3,
    name: 'GalleryIcon',
    type: 'gallery',
    icon: GalleryIcon,
  },
  {
    id: 4,
    name: 'GalleryIconBlack',
    type: 'gallery',
    icon: GalleryIconBlack,
  },
];
