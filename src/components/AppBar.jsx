import Constants from "expo-constants";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import theme from "../theme";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.backgroundPrimary,
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <CustomText color="secondary">Repositories</CustomText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
