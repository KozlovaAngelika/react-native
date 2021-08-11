import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '@material-ui/icons/Home';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import StarIcon from '@material-ui/icons/Star';
import Home from '../../screens/Home';
import TopMovies from '../../screens/TopMovies';
import Favorites from '../../screens/Favorites';

const Tab = createBottomTabNavigator();

const Tabs: React.FunctionComponent = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={Home} tabBarIcon={HomeIcon} />
    <Tab.Screen name="TopMovies" component={TopMovies} tabBarIcon={ThumbUpAltIcon} />
    <Tab.Screen name="Favorites" component={Favorites} tabBarIcon={StarIcon} />
  </Tab.Navigator>
);

export default Tabs;
