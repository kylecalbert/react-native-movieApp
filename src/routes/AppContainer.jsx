import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import AccountSettings from "../screens/AccountSettings/AccountSettings.jsx";
import Favourites from "../screens/Favourites/Favourites.jsx";
import MovieDetails from "../screens/MovieDetails/MovieDetails.jsx";
import Movies from "../screens/Movies/Movies.jsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const MovieStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="Movie" component={MovieDetails} />
    </Stack.Navigator>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="MoviesTab" component={MovieStack} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="AccountSettings" component={AccountSettings} />
    </Tab.Navigator>
  );
};

export default AppContainer;
