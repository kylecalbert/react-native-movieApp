import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  movieColumnContainer: {
    marginRight: 20,
    width: 150,
  },
  movieColumnTitle: {
    fontWeight: "bold",
    marginVertical: 15,
  },

  movieColumnImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  movieRowContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  movieRowTitle: {
    fontWeight: "bold",
  },
  movieRowImage: {
    width: 75,
    height: 100,
  },

  movieInfoContainer: {
    marginLeft: 10,
    justifyContent: "space-between",
  },
});

export default styles;
