import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 6
  },
  availableItemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: 12
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 10,
    borderRadius: 4,
    width: 100
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  itemText: { fontSize: 16, marginBottom: 4 },
  row: { flexDirection: "row", justifyContent: "space-around", width: 160 }
});

export default GlobalStyles;
