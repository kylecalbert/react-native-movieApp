import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";

import styles from "./Login.style";
import { useAuthorization } from "../../context/AuthorizationContext";

const Login = () => {
  const [_, setIsAuthorised] = useAuthorization();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = () => {
    setIsAuthorised(true);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to YourMovies!</Text>
          <Text style={styles.subTitle}>
            Your personal guide to the world of cinema
          </Text>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.textInput}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            onChangeText={setPassword}
            style={styles.textInput}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Login"
            color="#ff3559"
            onPress={loginUser}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
