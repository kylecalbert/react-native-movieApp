import React from "react";

import { AuthorizationProvider } from "./src/context/AuthorizationContext";
import Navigation from "./src/routes/RouteContainer";

const App = () => {
  return (
    <AuthorizationProvider>
      <Navigation />
    </AuthorizationProvider>
  );
};

export default App;
