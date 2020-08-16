import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export default App;
