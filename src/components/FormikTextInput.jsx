import { useField } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "./CustomText";
import TextInput from "./TextInput";


const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <CustomText style={styles.errorText}>{meta.error}</CustomText>}
    </>
  );
};

export default FormikTextInput;
