import { WallpaperManager } from 'react-native';

export const setWallpaper = async imageUrl => {
  try {
    const granted = await WallpaperManager.requestPermission();
    if (granted) {
      await WallpaperManager.setWallpaper({ uri: imageUrl }, () => {
        console.log('Wallpaper set!');
      });
    } else {
      console.log('Permission denied');
    }
  } catch (error) {
    console.error(error);
  }
};
