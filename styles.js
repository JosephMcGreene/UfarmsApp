import { StyleSheet } from "react-native";

export const landingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242424",
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  h2: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  h3: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  form: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 25,
    color: "white",
    alignSelf: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "grey",
    padding: 16,
  },
  btnsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
