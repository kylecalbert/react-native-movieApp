import React from "react";
import { SafeAreaView, Text } from "react-native";

import { useAuthorization } from "../../context/AuthorizationContext";

const AccountSettings = () => {
  const [_, setIsAuthorized] = useAuthorization();

  return (
    <SafeAreaView>
      <Text>Account Settings</Text>
      <Text onPress={() => setIsAuthorized(false)}>Logout</Text>
    </SafeAreaView>
  );
};

export default AccountSettings;
