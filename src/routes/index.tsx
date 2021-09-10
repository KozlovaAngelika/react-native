import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import TopMovies from '../screens/TopMovies';
import Favorites from '../screens/Favorites';
import '../utils/i18n';
import { COLORS, ROUTES } from '../utils/constants';
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const Tabs: React.FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: `${COLORS.BLACK}`,
        }}>
        <Tab.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{
            title: t('home'),
            tabBarIcon: ({ focused }) => (
              <TabIcon iconName="home" focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTES.TOP_MOVIES}
          component={TopMovies}
          options={{
            title: t('top250'),
            tabBarIcon: () => <TabIcon iconName="thumb-up" />,
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name={ROUTES.FAVORITES}
          component={Favorites}
          options={{
            title: t('favorites'),
            tabBarIcon: ({ focused }) => (
              <TabIcon iconName="star" focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Tabs;
