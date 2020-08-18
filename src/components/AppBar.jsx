import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.backgroundPrimary,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/">
            <CustomText color="secondary" fontSize="large">
              Repositories
            </CustomText>
          </Link>
          <Link to="/signin">
            <CustomText color="secondary" fontSize="large">
              Sign In
            </CustomText>
          </Link>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
