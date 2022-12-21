import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const HomePage = ({ wallpapers, navigate }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={wallpapers}
        renderItem={({ item }) => (
          <View style={styles.wallpaperContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.wallpaperImage} />
            <Text style={styles.wallpaperName}>{item.name}</Text>
            <Button
              title="View"
              onPress={() => navigate('WallpaperDetail', { wallpaper: item })}
            />
          </View>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
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
  wallpaperContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  wallpaperImage: {
    width: 150,
    height: 150,
  },
  wallpaperName: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default HomePage;
