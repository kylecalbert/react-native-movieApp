import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login/Login.jsx';

const Stack = createNativeStackNavigator();

const AuthContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthContainer;
