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
  button: {
    backgroundColor: "#020617",
    border: 0,
    borderRadius: 16,
    color: '#000',
    fontSize: 20,
    marginTop: 24,
    paddingBottom: 12,
    paddingTop: 12,
    width: '100%',
  }
});

export const modalStyles = StyleSheet.create({
  modalView: {
    margin: 15,
    marginTop: 45,
    backgroundColor: "white",
    padding: 20,
    elevation: 5,
  },
  h2: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  p: {
    fontSize: 16,
  },
  button: {
    borderWidth: 3,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
});
