import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository App</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
