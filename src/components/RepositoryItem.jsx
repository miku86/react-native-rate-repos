import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 4
  },
});

const RepositoryItem = ({
  item: {
    ownerAvatarUrl,
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
      <Image style={styles.itemImage} source={{ uri: ownerAvatarUrl }} />
      <Text>Full Name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Forks: {formatNumbers(forksCount)}</Text>
      <Text>Stars: {formatNumbers(stargazersCount)}</Text>
      <Text>Ratings: {formatNumbers(ratingAverage)}</Text>
      <Text>Reviews: {formatNumbers(reviewCount)}</Text>
    </View>
  );
};

export default RepositoryItem;
