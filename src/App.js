import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import VideoScreen from './screens/VideoScreen';

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: (
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Image source={require('./assets/images/kode_logo.png')} style={{ alignSelf: 'center' }} />
          </View>
        )
      }
    },
    VideoScreen: {
      screen: VideoScreen,
      navigationOptions: { header: null }
    }
  },
  {
    initialRounavBar: {
      height: 55,
      backgroundColor: 'white',
      elevation: 3,
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    teName: 'HomeScreen'
  }
);

const InitialNavigator = createSwitchNavigator(
  {
    Splash: { screen: SplashScreen },
    App: AppNavigator
  }
);

export default createAppContainer(InitialNavigator);
