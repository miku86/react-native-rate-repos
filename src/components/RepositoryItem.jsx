import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import theme from "../theme";
import { formatNumbers } from "../util/format";
import CustomText from "./CustomText";

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 20,
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
  },
  item__overview: {
    display: "flex",
    flexDirection: "row",
  },
  item__overview__image: {
    width: 64,
    height: 64,
    borderRadius: 4,
  },
  item__overview__details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 10,
  },
  item__overview__details__heading: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 700,
  },
  item__overview__details__description: {
    marginBottom: 8,
  },
  item__overview__details__languages: {
    color: theme.colors.gray,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    padding: 4,
    borderRadius: 4,
    width: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  item__details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  item__details__box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    <View style={styles.item}>
      <View style={styles.item__overview}>
        <Image
          style={styles.item__overview__image}
          source={{ uri: ownerAvatarUrl }}
        />
        <View style={styles.item__overview__details}>
          <Text style={styles.item__overview__details__heading}>
            {fullName}
          </Text>
          <Text style={styles.item__overview__details__description}>
            {description}
          </Text>
          <Text style={styles.item__overview__details__languages}>
            {language}
          </Text>
        </View>
      </View>
      <View style={styles.item__details}>
        <View style={styles.item__details__box}>
          <CustomText fontWeight="bold" fontSize="subheading">
            {formatNumbers(forksCount)}
          </CustomText>
          <Text>Forks</Text>
        </View>
        <View style={styles.item__details__box}>
          <CustomText fontWeight="bold" fontSize="subheading">
            {formatNumbers(stargazersCount)}
          </CustomText>
          <Text>Stars</Text>
        </View>
        <View style={styles.item__details__box}>
          <CustomText fontWeight="bold" fontSize="subheading">
            {formatNumbers(ratingAverage)}
          </CustomText>
          <Text>Ratings</Text>
        </View>
        <View style={styles.item__details__box}>
          <CustomText fontWeight="bold" fontSize="subheading">
            {formatNumbers(reviewCount)}
          </CustomText>
          <Text>Reviews</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
