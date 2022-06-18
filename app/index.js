import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Splash, Home, Signup} from './screens';
import Tabbar from './screens/Tabbar';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({headerShown: false}),
  },
  Splash: {
    screen: Splash,
  },
  Signup: {
    screen: Signup,
    navigationOptions: () => ({headerShown: false}),
  },
});

const RootNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: () => ({headerShown: false}),
    },
    Home: {
      screen: MainNavigator,
      navigationOptions: () => ({headerShown: false, gestureEnabled: false}),
    },
    Tabbar: {
      screen: Tabbar,
      navigationOptions: () => ({headerShown: false, gestureEnabled: false}),
    },
  },
  {
    initialRouteName: 'Splash',
    mode: 'modal',
  },
);

export default createAppContainer(RootNavigator);
