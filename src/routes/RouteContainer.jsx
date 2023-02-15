import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AppContainer from "./AppContainer.jsx";
import AuthContainer from "./AuthContainer.jsx";
import { useAuthorization } from "../context/AuthorizationContext.jsx";

const RouteContainer = () => {
  const [isAuthorised] = useAuthorization();

  return (
    <NavigationContainer>
      {isAuthorised ? <AppContainer /> : <AuthContainer />}
    </NavigationContainer>
  );
};

export default RouteContainer;
