import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../config/constants";
import { Ionicons } from "@expo/vector-icons";

function Cell({ title, icon, tintColor,style, onPress }) {
  return (
    <TouchableOpacity style={[styles.cell,style]} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: tintColor }]}>
        <Ionicons
          name={icon}
          size={25}
          color={"white"}
          justifyContent="center"
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Ionicons name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cell: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "white",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  title: {
    marginStart: 14,
    fontSize: 16,
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    backgroundColor: colors.logout,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cell;
