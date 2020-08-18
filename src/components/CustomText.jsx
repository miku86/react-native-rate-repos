import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
  fontSizeSmall: {
    fontSize: theme.fontSizes.small,
  },
  fontSizeMedium: {
    fontSize: theme.fontSizes.medium,
  },
  fontSizeLarge: {
    fontSize: theme.fontSizes.large,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const CustomText = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "small" && styles.fontSizeSmall,
    fontSize === "medium" && styles.fontSizeMedium,
    fontSize === "large" && styles.fontSizeLarge,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <Text style={textStyle} {...props} />;
};

export default CustomText;
