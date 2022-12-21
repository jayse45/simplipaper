import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const WallpaperDetail = ({ wallpaper, setWallpaper }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: wallpaper.imageUrl }} style={styles.wallpaperImage} />
      <Text style={styles.wallpaperName}>{wallpaper.name}</Text>
      <Button
        title="Set as wallpaper"
        onPress={() => setWallpaper(wallpaper.imageUrl)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wallpaperImage: {
    width: 300,
    height: 300,
  },
  wallpaperName: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default WallpaperDetail;
