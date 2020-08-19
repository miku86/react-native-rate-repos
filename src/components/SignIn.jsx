import { Formik } from "formik";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import theme from "../theme";
import CustomText from "./CustomText";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1

  },
  formField: {
    width: 300,
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    borderRadius: 4,
    paddingHorizontal: 20,
    paddingVertical: 12,
    margin: 20,
    fontSize: 22
  },
  formButton: {
    width: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    borderRadius: 4,
    padding: 12,
    margin: 20,
    textAlign: "center",
  },
});

const initialValues = {
  username: "",
  password: "",
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput
            style={styles.formField}
            name="username"
            placeholder="Username"
          />
          <FormikTextInput
            style={styles.formField}
            name="password"
            placeholder="Password"
          />
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={styles.formButton}>
              <CustomText color="white" fontSize="large">Submit</CustomText>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
