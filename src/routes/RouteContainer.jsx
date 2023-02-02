import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthContainer from './AuthContainer.jsx';
import AppContainer from './AppContainer.jsx';
import {useAuthorization} from '../context/AuthorizationContext.jsx';

const RouteContainer = () => {
  const [isAuthorised] = useAuthorization();

  return (
    <NavigationContainer>
      {isAuthorised ? <AppContainer /> : <AuthContainer />}
    </NavigationContainer>
  );
};

export default RouteContainer;
