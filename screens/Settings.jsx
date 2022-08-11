import React from "react";
import { View, StyleSheet, } from "react-native";
import ContanctRow from "../components/ContanctRow";
import Separator from "../components/Separator";
import { colors } from "../config/constants";
import Cell from "../components/Cell";
function Settings() {
  return (
    <View>
      <ContanctRow
        name="SAM KZGN"
        subtitle="sam@gmail.com"
        style={styles.ContanctRow}
      />
      <Separator />

      <Cell
      title="Logout"
      icon="chevron-forward-outline"
      tintColor={colors.logout}
      onPress={() => {  
        alert("You have logged out");
      }}
      />
      <Cell
      title="Help"
      icon="information-outline"
      tintColor={colors.primary}
      onPress={() => {  
        alert("You have logged out");
       
      }} 
      style={{marginTop:20}}
      />
        <Cell
      title="Tell a friend"
      icon="heart-outline"
      tintColor={colors.tell}
      onPress={() => {  
        alert("You have logged out");
      }}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  ContanctRow: {
    backgroundColor: "white",
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
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

export default Settings;
