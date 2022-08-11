import React from 'react'
import {View,StyleSheet} from "react-native";
import {colors} from "../config/constants"

function Separator() {
  return (
    <View style={styles.separator}/>

    
  )
}
const styles = StyleSheet.create({

    separator: {
            height: 1,
            backgroundColor: colors.border,
            marginStart: 88,
    }
})

export default Separator