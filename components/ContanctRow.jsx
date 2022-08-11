import React from 'react'
import {Text,TouchableOpacity,View, StyleSheet} from "react-native"
import { Ionicons } from "@expo/vector-icons";
import {  colors} from "../config/constants";

function ContanctRow({name, subtitle,onPress, style}) {
  return (
    <TouchableOpacity style={[styles.row,style]} onPress={onPress}>
    <View style={styles.avatar}>
      <Text style={styles.avatarLabel}>
        {name.split(' ').reduce((prev,current) => `${prev}${current[0]}`,"")}
        </Text>
    </View>
    <View style={styles.textsContainer}>
      <Text style={styles.name}> {name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <Ionicons name="chevron-forward-outline" size={20} />
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 25 : 0,
      },
      row: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 20,
      },
      textsContainer: {
        flex: 1,
        marginStart: 16,
      },
      name: {
        fontSize: 16,
      },
      subtitle: {
        marginTop: 2,
        color: "#565656",
      },
      
      avatar: {
        width: 56,
        height: 56,
        backgroundColor: colors.primary,
        borderRadius: 28,
        alignItems: "center",
        justifyContent: "center",
      },
      avatarLabel: {
        fontSize: 20,
        color: "#fff",
      },
})


export default ContanctRow