import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input({ value, changeText, addTodoItem }) {
  return (
    <TextInput
      value={value}
      onChangeText={changeText}
      onEndEditing={addTodoItem}
      style={styles.input}
      placeholder={"please write here what you have to do."}
      maxLength={30}
      returnKeyType="done"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 17,
    fontWeight: "bold"
  }
});
