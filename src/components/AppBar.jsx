import React from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Link } from "react-router-native";
import theme from "../theme";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.backgroundPrimary,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <ScrollView horizontal>
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
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;
