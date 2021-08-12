import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/Home';
import TopMovies from '../../screens/TopMovies';
import Favorites from '../../screens/Favorites';

import './utils/i18n/index';

const Tab = createMaterialBottomTabNavigator();

const whiteColor = '#fff';
const greyColor = '#d3d3d3';

const Tabs: React.FunctionComponent = () => (
  <Tab.Navigator
    initialRouteName="Home"
    barStyle={{
      backgroundColor: `${greyColor}`,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" size={26} color={whiteColor} />
        ),
      }}
    />
    <Tab.Screen
      name="TopMovies"
      component={TopMovies}
      options={{
        tabBarLabel: 'Top 250',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="thumb-up" size={26} color={whiteColor} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="star" size={26} color={whiteColor} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
