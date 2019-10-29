import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Subtitle({ title }) {
  return (
    <View>
      <Text style={styles.subtitleText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3f4e66"
  }
});
