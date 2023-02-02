import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthContainer from './AuthContainer.jsx';
import AppContainer from './AppContainer.jsx';

const RouteContainer = () => {
  const isAuthorised = false;

  return (
    <NavigationContainer>
      {isAuthorised ? <AppContainer /> : <AuthContainer />}
    </NavigationContainer>
  );
};

export default RouteContainer;
