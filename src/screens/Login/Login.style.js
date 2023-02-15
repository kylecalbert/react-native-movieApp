import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    justifyContent: "center",
    padding: 20,
  },

  titleContainer: {
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 10,
    color: "#A9A9A9",
    textAlign: "center",
  },

  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    marginBottom: 5,
  },

  textInput: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 15,
    padding: 5,
    borderRadius: 10,
  },
});

export default styles;
