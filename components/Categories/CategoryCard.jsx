import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";

const CategoryCard = ({ item, selectedCat, setSelectedCat }) => {
  let backgroundColor =
    selectedCat == item._id
      ? (backgroundColor = "red")
      : (backgroundColor = "");
  return (
    <>
      <TouchableOpacity
        style={{
          marginRight: 10,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
        onPress={() => setSelectedCat(item._id)}
      >
        <Image
          source={{ uri: `https://api.manxho.co.in${item.image}` }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            resizeMode: "cover",
            marginBottom: 10,
          }}
        />
        <Text
          style={
            selectedCat == item._id
              ? { textDecorationLine: "underline" }
              : { fontSize: 12 }
          }
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CategoryCard;
