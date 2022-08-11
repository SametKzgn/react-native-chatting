import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../config/constants";

function SignUp() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Create New Account</Text>
          <TextInput style={styles.input} placeholder="enter your name" />
          <TextInput style={styles.input} placeholder="enter your email" />
          <TextInput style={styles.input} placeholder="enter your password" />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity styles={styles.buttonContainer} >
              <Text styles={styles.buttonLabel}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text styles={styles.buttonLabel}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  title: {
    fontSize: 36,
    color: "#fff",
    fontWeight: "800",
    marginBottom: 16,
  },
  contentContainer: {
    padding: 32,
  },
  input: {
    backgroundColor: "#fff",
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonsContainer:{
    flexDirection: "row",
    justifyContent :"space-between",
     marginTop: 32,  
  },
  buttonContainer:{
    backgroundColor:"#000",
  },
  buttonLabel: {


  },
});

export default SignUp;
