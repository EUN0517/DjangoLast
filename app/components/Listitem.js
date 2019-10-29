import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Listitem({
  item,
  isComplete,
  changeComplete,
  deleteItem
}) {
  return (
    <View style={styles.listItemBox}>
      <View style={styles.makerow}>
        <TouchableOpacity onPress={changeComplete}>
          <AntDesign
            name={isComplete ? "checkcircle" : "checkcircleo"}
            size={20}
            style={styles.makeMargin}
          />
        </TouchableOpacity>
        <Text style={styles.listitemText}>{item}</Text>
      </View>
      <TouchableOpacity onPress={deleteItem}>
        <AntDesign name="closecircleo" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  listitemText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#3f4e66"
  },
  listItemBox: {
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 10,
    width: width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  makerow: {
    flexDirection: "row"
  },
  makeMargin: {
    marginRight: 10
  }
});
