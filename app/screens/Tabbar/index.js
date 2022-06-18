import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Activity from './Activity';
import Adoption from './Adoption';
import Donation from './Donation';
import Profile from './Profile';
import {colors} from '../../constants';
import {
  activityIcon,
  adoptionIcon,
  donationIcon,
  profileIcon,
  activityFocusedIcon,
  adoptionFocusedIcon,
  donationFocusedIcon,
  profileFocusedIcon,
} from '../../assets';

const Icon = ({icon, tintColor}) => {
  return (
    <Image
      resizeMode={'center'}
      style={{width: 25, height: 25, tintColor}}
      source={icon}></Image>
  );
};

export default createBottomTabNavigator(
  {
    Activity: {
      screen: Activity,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            icon={focused ? activityFocusedIcon : activityIcon}
            tintColor={tintColor}
          />
        ),
      },
    },
    Adoption: {
      screen: Adoption,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            icon={focused ? adoptionFocusedIcon : adoptionIcon}
            tintColor={tintColor}
          />
        ),
      },
    },
    Donation: {
      screen: Donation,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            icon={focused ? donationFocusedIcon : donationIcon}
            tintColor={tintColor}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => (
          <Icon
            icon={focused ? profileFocusedIcon : profileIcon}
            tintColor={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Activity',
    tabBarOptions: {
      activeTintColor: colors.darkOrange,
      inactiveTintColor: colors.textBrown,
    },
  },
);
