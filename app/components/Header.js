import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headercountainer}>
      <Text style={styles.headertext}>MyToDoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headercountainer: {
    marginTop: 50,
    marginBottom: 50
  },
  headertext: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#3f4c66"
  }
});
