import React from "react";
import { Text, View } from "react-native";

const RepositoryItem = ({
  item: {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
  },
}) => {
  return (
    <View>
      <Text>Full Name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Ratings: {ratingAverage}</Text>
      <Text>Reviews: {reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;
