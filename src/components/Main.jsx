import Constants from "expo-constants";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Rate Repository App</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;
