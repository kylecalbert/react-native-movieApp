import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountSettings from '../screens/AccountSettings/AccountSettings.jsx';
import Favourites from '../screens/Favourites/Favourites.jsx';
import Movies from '../screens/Movies/Movies.jsx';
import Movie from '../screens/Movie/Movie.jsx';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const MovieStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="MoviesTab" component={MovieStack} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="AccountSettings" component={AccountSettings} />
    </Tab.Navigator>
  );
};

export default AppContainer;
