import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/components/HomePage';
import WallpaperDetail from './src/components/WallpaperDetail';
import { setWallpaper } from './src/utils';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Wallpapers',
        }}
      />
      <Stack.Screen
        name="WallpaperDetail"
        component={WallpaperDetail}
        options={{
          title: 'Wallpaper Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
