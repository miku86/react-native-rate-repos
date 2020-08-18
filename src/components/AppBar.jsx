import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import theme from "../theme";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.backgroundPrimary,
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <CustomText color="secondary" fontSize="large">Repositories</CustomText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
