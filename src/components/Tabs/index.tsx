import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import HomeIcon from '@material-ui/icons/Home';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import StarIcon from '@material-ui/icons/Star';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/Home';
import TopMovies from '../../screens/TopMovies';
import Favorites from '../../screens/Favorites';

const Tab = createMaterialBottomTabNavigator();

const Tabs: React.FunctionComponent = () => (
  // eslint-disable-next-line react-native/no-inline-styles
  <Tab.Navigator initialRouteName="Home" barStyle={{ backgroundColor: '#d3d3d3' }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" size={26} color="#fff" />
        ),
      }}
    />
    <Tab.Screen
      name="TopMovies"
      component={TopMovies}
      options={{
        tabBarLabel: 'Top 250',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="thumb-up" size={26} color="#fff" />
        ),
      }}
    />
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="star" size={26} color="#fff" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Tabs;
